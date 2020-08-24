import RuntimeError from './RuntimeError';
import { ValidationError } from 'class-validator/types/validation/ValidationError';
import HttpStatusCode from 'src/utils/HttpStatusCode';

class BadRequestError extends RuntimeError {
	constructor(message: string, errors?: ValidationError[]) {
		super(HttpStatusCode.BAD_REQUEST, message, errors);
	}
}
export default BadRequestError;
