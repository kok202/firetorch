import React, { useState, useCallback } from 'react';
import Regist from 'src/components/presentation/Regist';
import { useForm } from 'react-hook-form';
import useFormat from 'src/hooks/useFormat';
import User from 'src/domain/User';
import useStore from 'src/hooks/useStore';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import CONSTANTS from 'src/utils/Constants';

interface Props {}

const RegistContainer = (props: Props) => {
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
		<Regist
			errorMessage={errorMessage}
			register={register}
			handleSubmit={handleSubmit(handleRegistUser)}
		/>
	);
};

export default observer(RegistContainer);
