import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useFormat from 'src/hooks/useFormat';
import User from 'src/domain/User';
import useStore from 'src/hooks/useStore';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import UserModify from 'src/components/presentation/UserModify';
import CONSTANTS from 'src/utils/Constants';

interface Props {}

const UserModifyContainer = (props: Props) => {
	const { format } = useFormat();
	const { register, handleSubmit } = useForm();
	const rootStore = useStore();
	const history = useHistory();
	const [errorMessage, setErrorMessage] = useState<string>();

	const handleModifyUser = useCallback(
		async (data: any) => {
			const user = { ...data } as User;
			rootStore.authStore
				.dispatchModifyUser(user)
				.then(() => history.push(CONSTANTS.URL_USER_ME))
				.catch(error => setErrorMessage(format(error.message)));
		},
		[rootStore.authStore.isLogined()],
	);

	useEffect(() => {
		rootStore.userStore
			.dispatchGetUserByNickname('me')
			.catch(() => history.push(CONSTANTS.URL_ROOT));
	}, []);

	return (
		<UserModify
			nickname={rootStore.userStore.data.nickname}
			message={rootStore.userStore.data.message}
			errorMessage={errorMessage}
			handleSubmit={handleSubmit(handleModifyUser)}
			register={register}
		/>
	);
};

export default observer(UserModifyContainer);
