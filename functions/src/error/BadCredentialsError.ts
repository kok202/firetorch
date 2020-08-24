import HttpStatusCode from '../utils/HttpStatusCode';
import RuntimeError from './RuntimeError';

class BadCredentialsError extends RuntimeError {
	constructor() {
		super(HttpStatusCode.UNAUTHORIZED, 'Token is not exist.');
	}
}
export default BadCredentialsError;
