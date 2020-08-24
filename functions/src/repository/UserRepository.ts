import CONSTANTS from '../utils/Constants';
import User from '../domain/User';
import { plainToClass } from 'class-transformer';
import FirebaseAdmin from 'src/utils/FirebaseAdmin';
import { Md5 } from 'ts-md5/dist/md5';
import moment from 'moment';

export const convert = (
	documentSnapshot: FirebaseFirestore.QueryDocumentSnapshot | FirebaseFirestore.DocumentSnapshot,
): User => {
	const user = documentSnapshot.data() as User;
	user.id = documentSnapshot.id;
	return user;
};

export const getIdByNickname = (nickname: string) => {
	const encoded = Md5.hashStr(nickname);
	if (typeof encoded === 'string') return encoded;
	return '';
};

export const findUserByFirebaseUserId = async (
	firebaseUserId: string,
	transaction?: FirebaseFirestore.Transaction,
): Promise<User | undefined> => {
	const get = transaction
		? transaction.get(
				FirebaseAdmin.firestore()
					.collection(CONSTANTS.COLLECTION_USER)
					.where('firebaseUserId', '==', firebaseUserId),
		  )
		: FirebaseAdmin.firestore()
				.collection(CONSTANTS.COLLECTION_USER)
				.where('firebaseUserId', '==', firebaseUserId)
				.get();
	return get.then(query => {
		if (query.docs.length == 0) return;
		const doc = query.docs[0];
		return convert(doc);
	});
};

export const findUserByNickname = async (
	nickname: string,
	transaction?: FirebaseFirestore.Transaction,
): Promise<User | undefined> => {
	const documentId = getIdByNickname(nickname);
	const get = transaction
		? transaction.get(
				FirebaseAdmin.firestore()
					.collection(CONSTANTS.COLLECTION_USER)
					.doc(documentId),
		  )
		: FirebaseAdmin.firestore()
				.collection(CONSTANTS.COLLECTION_USER)
				.doc(documentId)
				.get();
	return get.then(doc => {
		if (!doc.exists) return;
		return convert(doc);
	});
};

export const findUserByNicknameLike = async (
	nickname: string,
	pageSize: number,
	offset: number,
	transaction?: FirebaseFirestore.Transaction,
): Promise<User[]> => {
	const get = transaction
		? transaction.get(
				FirebaseAdmin.firestore()
					.collection(CONSTANTS.COLLECTION_USER)
					.where('nickname', '>=', nickname)
					.limit(pageSize)
					.offset(offset),
		  )
		: FirebaseAdmin.firestore()
				.collection(CONSTANTS.COLLECTION_USER)
				.where('nickname', '>=', nickname)
				.limit(pageSize)
				.offset(offset)
				.get();
	return get.then(query => {
		if (query.docs.length == 0) return [];
		return query.docs.map(doc => convert(doc));
	});
};

export const findUserByIdIn = async (
	ids: string[],
	transaction?: FirebaseFirestore.Transaction,
): Promise<User[]> => {
	if (ids.length == 0) return [];
	const get = transaction
		? transaction.get(
				FirebaseAdmin.firestore()
					.collection(CONSTANTS.COLLECTION_USER)
					.where(FirebaseFirestore.FieldPath.documentId(), 'in', ids),
		  )
		: FirebaseAdmin.firestore()
				.collection(CONSTANTS.COLLECTION_USER)
				.where(FirebaseFirestore.FieldPath.documentId(), 'in', ids)
				.get();
	return get.then(query => {
		if (query.docs.length == 0) return [];
		return query.docs.map(doc => convert(doc));
	});
};

export const createUser = async (
	firebaseUserId: string,
	user: User,
	transaction?: FirebaseFirestore.Transaction,
): Promise<User> => {
	user.firebaseUserId = firebaseUserId;
	const currentTimestamp = moment.now();
	const documentId = getIdByNickname(user.nickname);
	const userEntity = {
		id: documentId,
		createdTimestamp: currentTimestamp,
		modifiedTimestamp: currentTimestamp,
		firebaseUserId: user.firebaseUserId,
		nickname: user.nickname,
		message: user.message,
	};
	const create = transaction
		? transaction.create(
				FirebaseAdmin.firestore()
					.collection(CONSTANTS.COLLECTION_USER)
					.doc(documentId),
				userEntity,
		  )
		: FirebaseAdmin.firestore()
				.collection(CONSTANTS.COLLECTION_USER)
				.doc(documentId)
				.create(userEntity);
	await create;
	return plainToClass(User, userEntity);
};

export const updateUserById = async (
	id: string,
	user: User,
	transaction?: FirebaseFirestore.Transaction,
): Promise<User> => {
	const userEntity = {
		modifiedTimestamp: moment.now(),
		message: user.message,
	};
	const update = transaction
		? transaction.update(
				FirebaseAdmin.firestore()
					.collection(CONSTANTS.COLLECTION_USER)
					.doc(id),
				userEntity,
		  )
		: FirebaseAdmin.firestore()
				.collection(CONSTANTS.COLLECTION_USER)
				.doc(id)
				.update(userEntity);
	await update;
	return plainToClass(User, { ...user, ...userEntity });
};

export const deleteUserById = async (id: string, transaction?: FirebaseFirestore.Transaction) => {
	const deletePromise = transaction
		? transaction.delete(
				FirebaseAdmin.firestore()
					.collection(CONSTANTS.COLLECTION_USER)
					.doc(id),
		  )
		: FirebaseAdmin.firestore()
				.collection(CONSTANTS.COLLECTION_USER)
				.doc(id)
				.delete();
	await deletePromise;
};
