import React from 'react';
import { Redirect } from 'react-router-dom';
import useStore from 'src/hooks/useStore';
import { observer } from 'mobx-react';
import CONSTANTS from 'src/utils/Constants';

interface Props {}

const UserPage = (props: Props) => {
	const rootStore = useStore();
	if (!rootStore.authStore.isLogined()) return <Redirect to={CONSTANTS.URL_USER_LOGIN} />;
	return <Redirect to={CONSTANTS.URL_USER_ME} />;
};

export default observer(UserPage);
