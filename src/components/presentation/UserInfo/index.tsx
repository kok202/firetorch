import React from 'react';
import './index.styles.ts';
import { Container } from './index.styles';

interface Props {
	isMine: boolean;
	id: string;
	firebaseUserId: string;
	nickname: string;
	message: string;
	createdTimestamp: number;
	modifiedTimestamp: number;
	handleModify: () => void;
	handleLogout: () => void;
}

const UserInfo = (props: Props) => {
	return (
		<Container>
			<div className="row">
				<div className="label">ID</div>
				<div className="value">{props.id}</div>
			</div>
			<div className="row">
				<div className="label">Firebase userId</div>
				<div className="value">{props.firebaseUserId}</div>
			</div>
			<div className="row">
				<div className="label">Nickname</div>
				<div className="value">{props.nickname}</div>
			</div>
			<div className="row">
				<div className="label">Message</div>
				<div className="value">{props.message}</div>
			</div>
			<div className="row">
				<div className="label">Created</div>
				<div className="value">{props.createdTimestamp}</div>
			</div>
			<div className="row">
				<div className="label">Modified</div>
				<div className="value">{props.modifiedTimestamp}</div>
			</div>
			{props.isMine && (
				<>
					<div className="row">
						<div className="button" onClick={props.handleModify}>
							Modify
						</div>
						<div className="button" onClick={props.handleLogout}>
							Logout
						</div>
					</div>
				</>
			)}
		</Container>
	);
};

UserInfo.defaultProps = {
	isMine: false,
	id: 'Not found',
	firebaseUserId: 'Not found',
	nickname: 'Not found',
	message: 'Hello world',
	createdTimestamp: 0,
	modifiedTimestamp: 0,
	handleModify: () => {},
	handleLogout: () => {},
};

export default UserInfo;
