import moment from 'moment';

class User {
	id: string;
	firebaseUserId: string;
	nickname: string;
	message: string;
	createdTimestamp: number;
	modifiedTimestamp: number;

	constructor() {
		this.id = '';
		this.firebaseUserId = '';
		this.nickname = '';
		this.message = '';
		this.createdTimestamp = moment.now();
		this.modifiedTimestamp = moment.now();
	}
}

export default User;
