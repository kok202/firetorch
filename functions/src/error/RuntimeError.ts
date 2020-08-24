import HttpStatusCode from '../utils/HttpStatusCode';
import { ValidationError } from 'class-validator/types/validation/ValidationError';

class RuntimeError extends Error {
	statusCode: HttpStatusCode;
	message: string;
	errors?: ValidationError[];

	constructor(statusCode: HttpStatusCode, message: string, errors?: ValidationError[]) {
		super();
		this.statusCode = statusCode;
		this.message = message;
		this.errors = errors;
	}
}

export default RuntimeError;
