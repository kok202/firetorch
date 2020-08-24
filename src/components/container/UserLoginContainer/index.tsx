import React, { useCallback, useEffect, useState } from 'react';
import UserLogin from 'src/components/presentation/UserLogin';
import { observer } from 'mobx-react';
import useStore from 'src/hooks/useStore';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useFormat from 'src/hooks/useFormat';
import CONSTANTS from 'src/utils/Constants';

interface Props {}

const UserLoginContainer = (props: Props) => {
	const rootStore = useStore();
	const history = useHistory();
	const { register, handleSubmit } = useForm();
	const [errorMessage, setErrorMessage] = useState<string>();

	const handleEmailSignup = useCallback(() => {
		history.push(CONSTANTS.URL_USER_SIGNUP);
	}, []);

	const handleEmailLogin = useCallback(
		async (data: any) => {
			const email = data.email;
			const password = data.password;
			rootStore.authStore
				.dispatchEmailLogin(email, password)
				.then(() => history.push(CONSTANTS.URL_USER_REGIST))
				.catch(error => setErrorMessage(error.message));
		},
		[rootStore.authStore],
	);

	const handleGoogleLogin = useCallback(() => {
		rootStore.authStore
			.dispatchPopupGoogleLogin()
			.then(() => history.push(CONSTANTS.URL_USER_REGIST))
			.catch(error => setErrorMessage(error.message));
	}, [rootStore.authStore]);

	useEffect(() => {
		if (rootStore.authStore.isLogined()) history.push(CONSTANTS.URL_USER_REGIST);
	}, []);

	return (
		<UserLogin
			errorMessage={errorMessage}
			emailPattern={CONSTANTS.EMAIL_REGEXP}
			minPasswordLength={CONSTANTS.MIN_PASSWORD_LENGTH}
			handleEmailSignup={handleEmailSignup}
			handleEmailLoginSubmit={handleSubmit(handleEmailLogin)}
			handleGoogleLogin={handleGoogleLogin}
			register={register}
		/>
	);
};

export default observer(UserLoginContainer);
