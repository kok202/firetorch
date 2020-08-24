import express from 'express';
import BadRequestError from '../error/BadRequestError';
import FirebaseUtils from './FirebaseUtils';
import { ClassType, transformAndValidate } from 'class-transformer-validator';
import BadCredentialsError from '../error/BadCredentialsError';
import InvalidTokenError from '../error/InvalidTokenError';

class ValidationUtils {
	static decodeHeader = async (request: express.Request) => {
		const authorizationHeader = request.headers.authorization;
		if (authorizationHeader === undefined) throw new BadCredentialsError();
		const accessToken = authorizationHeader.split('Bearer ')[1];
		return await FirebaseUtils.verifyToken(accessToken);
	};

	static decodeHeaderIfExist = async (request: express.Request) => {
		const autorizationHeader = request.headers.authorization;
		if (autorizationHeader === undefined) return undefined;
		const accessToken = autorizationHeader.split('Bearer ')[1];
		return await FirebaseUtils.verifyToken(accessToken);
	};

	static validateHeader = async (request: express.Request, comparedFirebaseUserId: string) => {
		const firebaseUserId = await ValidationUtils.decodeHeader(request);
		if (firebaseUserId !== comparedFirebaseUserId) {
			throw new InvalidTokenError();
		}
		return firebaseUserId;
	};

	static validateUserId = async (firebaseUserId: string, comparedFirebaseUserId: string) => {
		if (firebaseUserId !== comparedFirebaseUserId) {
			throw new InvalidTokenError();
		}
		return firebaseUserId;
	};

	static validate = async <T extends object>(classType: ClassType<T>, data: any) => {
		try {
			await transformAndValidate(classType, data);
		} catch (errors) {
			console.log('Bad request : ' + errors);
			throw new BadRequestError('Bad request', errors);
		}
	};
}

export default ValidationUtils;
