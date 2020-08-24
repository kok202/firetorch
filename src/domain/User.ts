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
		this.createdTimestamp = 0;
		this.modifiedTimestamp = 0;
	}
}

export default User;
