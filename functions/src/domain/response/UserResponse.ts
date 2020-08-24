import User from '../User';

export default class UserResponse {
	isEnd?: boolean;
	data: User[] | User;
	constructor(users: User[] | User, isEnd?: boolean) {
		this.isEnd = isEnd;
		this.data = users;
	}
}
