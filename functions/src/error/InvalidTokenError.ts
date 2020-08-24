import HttpStatusCode from '../utils/HttpStatusCode';
import RuntimeError from './RuntimeError';

class InvalidTokenError extends RuntimeError {
	constructor() {
		super(HttpStatusCode.FORBIDDEN, 'Invalid token! :(');
	}
}
export default InvalidTokenError;
