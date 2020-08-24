import HttpStatusCode from '../utils/HttpStatusCode';
import RuntimeError from './RuntimeError';

class TransactionError extends RuntimeError {
	constructor() {
		super(HttpStatusCode.INTERNAL_SERVER_ERROR, 'Transaction error! :(');
	}
}
export default TransactionError;
