import HttpStatusCode from '../utils/HttpStatusCode';
import RuntimeError from './RuntimeError';

class NotFoundError extends RuntimeError {
	constructor(message: string) {
		super(HttpStatusCode.NOT_FOUND, message + ' is/are not exists.');
	}
}
export default NotFoundError;
