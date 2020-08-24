import React from 'react';
import UserInfoContainer from 'src/components/container/UserInfoContainer';

interface Props {}

const UserMePage = (props: Props) => {
	return <UserInfoContainer nickname="me" />;
};

export default UserMePage;
