import User from '../domain/User';
import * as UserRepository from '../repository/UserRepository';
import NotFoundError from '../error/NotFoundError';
import FirebaseAdmin from '../utils/FirebaseAdmin';
import BadRequestError from '../error/BadRequestError';
import ValidationUtils from '../utils/ValidationUtils';

export const findIdByNickname = async (nickname: string) => {
	return UserRepository.getIdByNickname(nickname);
};

export const findIdByFirebaseUserId = async (firebaseUserId: string) => {
	const user = await findUserByFirebaseUserId(firebaseUserId);
	return UserRepository.getIdByNickname(user.nickname);
};

export const findUserByNickname = async (nickname: string) => {
	const user = await UserRepository.findUserByNickname(nickname);
	if (!user) throw new NotFoundError(`User ${nickname}`);
	return user;
};

export const findUserByFirebaseUserId = async (firebaseUserId: string) => {
	const user = await UserRepository.findUserByFirebaseUserId(firebaseUserId);
	if (!user) throw new NotFoundError(`User ${firebaseUserId}`);
	return user;
};

export const findUserByNicknameLike = async (
	nickname: string,
	pageSize: number,
	offset: number,
) => {
	return await UserRepository.findUserByNicknameLike(nickname, pageSize, offset);
};

export const createUser = async (firebaseUserId: string, user: User) => {
	return await FirebaseAdmin.firestore().runTransaction(async transaction => {
		let savedUser = await UserRepository.findUserByFirebaseUserId(firebaseUserId, transaction);
		if (savedUser) throw new BadRequestError('You already regist.');
		savedUser = await UserRepository.findUserByNickname(user.nickname, transaction);
		if (savedUser) throw new BadRequestError('Nickname already exist.');
		return await UserRepository.createUser(firebaseUserId, user, transaction);
	});
};

export const updateUserById = async (authorizedFirebaseUserId: string, user: User) => {
	const prevUser = await findUserByFirebaseUserId(authorizedFirebaseUserId);
	return await UserRepository.updateUserById(prevUser.id, user);
};

export const deleteUserById = async (nickname: string, authorizedFirebaseUserId: string) => {
	const user = await findUserByNickname(nickname);
	await ValidationUtils.validateUserId(user.firebaseUserId, authorizedFirebaseUserId);
	await UserRepository.deleteUserById(user.id);
};
