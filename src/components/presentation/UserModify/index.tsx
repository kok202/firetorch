import React, { useState, useCallback } from 'react';
import './index.styles.ts';
import { Container } from './index.styles';

interface Props {
	nickname: string;
	message: string;
	errorMessage?: string;
	handleSubmit: (data: any) => any;
	register: (...p: any[]) => any;
}

const UserModify = (props: Props) => {
	return (
		<Container>
			<form onSubmit={props.handleSubmit}>
				<div className="row">
					<div className="label">Nickname</div>
					<input
						value={props.nickname}
						disabled={true}
						className="input"
						name="nickname"
						ref={props.register({
							required: true,
						})}
					/>
				</div>
				<div className="row">
					<div className="label">Message</div>
					<input
						defaultValue={props.message}
						className="input"
						name="message"
						ref={props.register()}
					/>
				</div>
				{props.errorMessage && <div className="error">{props.errorMessage}</div>}
				<button className="regist" type="submit">
					Modify
				</button>
			</form>
		</Container>
	);
};

UserModify.defaultProps = {
	nickname: 'Not found',
	message: 'Hello world',
	register: () => {},
	handleSubmit: () => {},
};

export default UserModify;
