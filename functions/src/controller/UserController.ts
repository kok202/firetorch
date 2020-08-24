import express from 'express';
import HttpStatusCode from '../utils/HttpStatusCode';
import handlerWrapper from '../utils/HandlerWrapper';
import ValidationUtils from '../utils/ValidationUtils';
import UserRequest from '../domain/request/UserRequest';
import UserResponse from '../domain/response/UserResponse';
import * as UserService from '../service/UserService';

export const postUserHandler = express.Router().post(
	'/users',
	handlerWrapper(async (request: express.Request, response: express.Response) => {
		const firebaseUserId = await ValidationUtils.decodeHeader(request);
		let user = await UserRequest.normalize(request);
		user = await UserService.createUser(firebaseUserId, user);
		response.status(HttpStatusCode.CREATED).send(new UserResponse(user));
	}),
);

export const getUserMeHandler = express.Router().get(
	'/users/me',
	handlerWrapper(async (request: express.Request, response: express.Response) => {
		const firebaseUserId = await ValidationUtils.decodeHeader(request);
		const user = await UserService.findUserByFirebaseUserId(firebaseUserId);
		response.status(HttpStatusCode.OK).send(new UserResponse(user));
	}),
);

export const putUserMeHandler = express.Router().put(
	'/users/me',
	handlerWrapper(async (request: express.Request, response: express.Response) => {
		const firebaseUserId = await ValidationUtils.decodeHeader(request);
		let user = await UserRequest.normalize(request);
		user = await UserService.updateUserById(firebaseUserId, user);
		response.status(HttpStatusCode.OK).send(new UserResponse(user));
	}),
);

export const getUserByNicknameHandler = express.Router().get(
	'/users/:nickname',
	handlerWrapper(async (request: express.Request, response: express.Response) => {
		const nickname = request.params.nickname;
		let user = await UserService.findUserByNickname(nickname);
		response.status(HttpStatusCode.OK).send(new UserResponse(user));
	}),
);
