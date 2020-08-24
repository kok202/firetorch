import React, { useEffect, useCallback, useState } from 'react';
import UserInfo from 'src/components/presentation/UserInfo';
import { observer } from 'mobx-react';
import useStore from 'src/hooks/useStore';
import { useHistory } from 'react-router-dom';
import CONSTANTS from 'src/utils/Constants';

interface Props {
	nickname: string;
}

const UserInfoContainer = (props: Props) => {
	const rootStore = useStore();
	const history = useHistory();

	const handleModify = useCallback(() => {
		history.push(CONSTANTS.URL_USER_MODIFY);
	}, []);

	const handleLogout = useCallback(() => {
		rootStore.authStore.dispatchLogout().then(() => history.push(CONSTANTS.URL_ROOT));
	}, []);

	useEffect(() => {
		rootStore.userStore
			.dispatchGetUserByNickname(props.nickname)
			.catch(() => history.push(CONSTANTS.URL_ROOT));
	}, [props.nickname]);

	return (
		<UserInfo
			isMine={rootStore.authStore.getFirebaseUserId() === rootStore.userStore.data.firebaseUserId}
			id={rootStore.userStore.data.id}
			firebaseUserId={rootStore.userStore.data.firebaseUserId}
			nickname={rootStore.userStore.data.nickname}
			message={rootStore.userStore.data.message}
			createdTimestamp={rootStore.userStore.data.createdTimestamp}
			modifiedTimestamp={rootStore.userStore.data.modifiedTimestamp}
			handleModify={handleModify}
			handleLogout={handleLogout}
		/>
	);
};

export default observer(UserInfoContainer);
