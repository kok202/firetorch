import React from 'react';
import UserInfoContainer from 'src/components/container/UserInfoContainer';
import { RouteComponentProps } from 'react-router-dom';

interface Props {
	nickname: string;
}

const UserInfoPage = (props: RouteComponentProps<Props>) => {
	const nickname = props.match.params.nickname;
	return <UserInfoContainer nickname={nickname} />;
};

export default UserInfoPage;
