import axios from 'axios';
import getFirebaseApplication from 'src/utils/FirebaseApplication';
import CONSTANTS from 'src/utils/Constants';

class AxiosUtils {
	static readonly BEARER: string = 'Bearer ';
	static readonly API_ROOT: string = CONSTANTS.API_ROOT!;

	private static async getTokenAndUser() {
		const currentFirebaseUser = getFirebaseApplication().auth().currentUser;
		if (!currentFirebaseUser || !currentFirebaseUser.uid) {
			return { token: undefined };
		}
		return {
			token: await currentFirebaseUser.getIdToken(true),
		};
	}

	private static async getTokenSafely(): Promise<string | undefined> {
		const { token } = await AxiosUtils.getTokenAndUser();
		return token;
	}

	private static createHeaders(token?: string) {
		return token ? { Authorization: this.BEARER + token } : {};
	}

	static async get(path: string, params?: any) {
		const token = await AxiosUtils.getTokenSafely();
		return axios.get(this.API_ROOT + path, {
			headers: AxiosUtils.createHeaders(token),
			params: params,
		});
	}

	static async post(path: string, requestBody?: any) {
		const token = await AxiosUtils.getTokenSafely();
		return axios.post(this.API_ROOT + path, requestBody, {
			headers: AxiosUtils.createHeaders(token),
		});
	}
	static async put(path: string, requestBody?: any) {
		const token = await AxiosUtils.getTokenSafely();
		return axios.put(this.API_ROOT + path, requestBody, {
			headers: AxiosUtils.createHeaders(token),
		});
	}
	static async delete(path: string) {
		const token = await AxiosUtils.getTokenSafely();
		return axios.delete(this.API_ROOT + path, {
			headers: AxiosUtils.createHeaders(token),
		});
	}
}

export default AxiosUtils;
