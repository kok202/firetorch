import React, { useState, useCallback } from 'react';
import UserRegist from 'src/components/presentation/UserRegist';
import { useForm } from 'react-hook-form';
import useFormat from 'src/hooks/useFormat';
import User from 'src/domain/User';
import useStore from 'src/hooks/useStore';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import CONSTANTS from 'src/utils/Constants';

interface Props {}

const UserRegistContainer = (props: Props) => {
	const { format } = useFormat();
	const { register, handleSubmit } = useForm();
	const rootStore = useStore();
	const history = useHistory();
	const [errorMessage, setErrorMessage] = useState<string>();

	const handleRegistUser = useCallback(
		async (data: any) => {
			if (!rootStore.authStore.isLogined()) {
				setErrorMessage(format('Error.AuthNotExist'));
				return;
			}
			const user = { ...data } as User;
			rootStore.authStore.dispatchRegistUser(user).catch(error => {
				setErrorMessage(format(error.message));
			});
		},
		[rootStore.authStore.isLogined()],
	);

	autorun(() => {
		if (rootStore.authStore.isRegisted) history.push(CONSTANTS.URL_USER_ME);
		else rootStore.authStore.dispatchValidateRegistedUser();
	});

	return (
		<UserRegist
			errorMessage={errorMessage}
			register={register}
			handleSubmit={handleSubmit(handleRegistUser)}
		/>
	);
};

export default observer(UserRegistContainer);
