import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import useStore from 'src/hooks/useStore';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useFormat from 'src/hooks/useFormat';
import CONSTANTS from 'src/utils/Constants';
import UserEmailSignup from 'src/components/presentation/UserEmailSignup';

interface Props {}

const UserEmailSignupContainer = (props: Props) => {
	const rootStore = useStore();
	const history = useHistory();
	const { format } = useFormat();
	const { register, handleSubmit } = useForm();
	const [errorMessage, setErrorMessage] = useState<string>();

	const handleEmailSignup = useCallback(async (data: any) => {
		const email = data.email;
		const password = data.password;
		rootStore.authStore
			.dispatchEmailSignup(email, password)
			.then(() => history.push(CONSTANTS.URL_USER_LOGIN))
			.catch(error => setErrorMessage(format(error.message)));
	}, []);

	useEffect(() => {
		if (rootStore.authStore.isLogined()) history.push(CONSTANTS.URL_USER_LOGIN);
	}, []);

	return (
		<UserEmailSignup
			errorMessage={errorMessage}
			emailPattern={CONSTANTS.EMAIL_REGEXP}
			minPasswordLength={CONSTANTS.MIN_PASSWORD_LENGTH}
			handleEmailSignupSubmit={handleSubmit(handleEmailSignup)}
			register={register}
		/>
	);
};

export default observer(UserEmailSignupContainer);
