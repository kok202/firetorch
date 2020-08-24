import express from 'express';
import { IsNotEmpty, MinLength, MaxLength, IsNotIn } from 'class-validator';
import CONSTANTS from '../../utils/Constants';
import ValidationUtils from '../../utils/ValidationUtils';
import EntityConverter from '../../utils/EntityConverter';
import User from '../User';

class UserRequest {
	@IsNotEmpty()
	@MinLength(CONSTANTS.MIN_NICKNAME_LENGTH, { message: 'Nickname is too short. (>= $constraint1)' })
	@MaxLength(CONSTANTS.MAX_NICKNAME_LENGTH, { message: 'Nickname is too long. (<= $constraint1)' })
	@IsNotIn(CONSTANTS.RESERVED_NICKNAME)
	nickname: string;
	message: string;

	constructor() {
		this.nickname = '';
		this.message = '';
	}

	static normalize = async (request: express.Request): Promise<User> => {
		const userRequest = request.body as UserRequest;
		await ValidationUtils.validate(UserRequest, userRequest);
		return EntityConverter.convert(User, userRequest);
	};
}

export default UserRequest;
