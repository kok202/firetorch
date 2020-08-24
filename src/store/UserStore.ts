import { observable } from 'mobx';
import { actionAsync, task } from 'mobx-utils';
import AxiosUtils from 'src/utils/AxiosUtils';
import HttpStatusCode from 'src/utils/HttpStatusCode';
import User from 'src/domain/User';

class UserStore {
	@observable data: User;

	constructor() {
		this.data = new User();
	}

	@actionAsync
	dispatchGetUserByNickname = async (nickname: string) => {
		const response = await task(AxiosUtils.get(`/users/${nickname}`));
		if (response.status !== HttpStatusCode.OK) {
			throw new Error(`${response.status}`);
		}
		this.data = response.data.data as User;
	};
}

export default UserStore;
