import { observable, action } from 'mobx';
import { actionAsync, task } from 'mobx-utils';
import getFirebaseApplication from 'src/utils/FirebaseApplication';
import firebase from 'firebase';
import AxiosUtils from 'src/utils/AxiosUtils';
import HttpStatusCode from 'src/utils/HttpStatusCode';
import User from 'src/domain/User';

class AuthStore {
	@observable isRegisted: boolean;

	constructor() {
		this.isRegisted = false;
	}

	isLogined = () => {
		return Boolean(sessionStorage.getItem('logined'));
	};

	getFirebaseUserId = () => {
		return sessionStorage.getItem('firebaseUserId');
	};

	@actionAsync
	subscribeAuthChanged = () => {
		task(
			getFirebaseApplication()
				.auth()
				.onAuthStateChanged(currentUser => {
					if (currentUser) {
						sessionStorage.setItem('logined', 'ture');
						sessionStorage.setItem('firebaseUserId', currentUser.uid);
					} else {
						sessionStorage.removeItem('logined');
						sessionStorage.removeItem('firebaseUserId');
						this.isRegisted = false;
					}
				}),
		);
	};

	@actionAsync
	dispatchEmailSignup = async (email: string, password: string) => {
		await task(
			getFirebaseApplication()
				.auth()
				.createUserWithEmailAndPassword(email, password),
		);
	};

	@actionAsync
	dispatchEmailLogin = async (email: string, password: string) => {
		await task(
			getFirebaseApplication()
				.auth()
				.signInWithEmailAndPassword(email, password),
		);
	};

	@actionAsync
	dispatchPopupGoogleLogin = async () => {
		await task(
			getFirebaseApplication()
				.auth()
				.signInWithPopup(new firebase.auth.GoogleAuthProvider()),
		);
	};

	@actionAsync
	dispatchLogout = async () => {
		await task(
			getFirebaseApplication()
				.auth()
				.signOut(),
		);
	};

	@actionAsync
	dispatchRegistUser = async (user: User) => {
		const response = await task(AxiosUtils.post('/users', user));
		this.isRegisted = response.status === HttpStatusCode.CREATED;
	};

	@actionAsync
	dispatchModifyUser = async (user: User) => {
		const response = await task(AxiosUtils.put('/users/me', user));
	};

	@actionAsync
	dispatchValidateRegistedUser = async () => {
		const response = await task(AxiosUtils.get('/users/me'));
		this.isRegisted = response.status === HttpStatusCode.OK;
	};
}

export default AuthStore;
