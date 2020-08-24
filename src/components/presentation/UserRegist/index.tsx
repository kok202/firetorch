import React from 'react';
import './index.styles.ts';
import { Container } from './index.styles';

interface Props {
	errorMessage?: string;
	minNicknameLength: number;
	maxNicknameLength: number;
	register: (...p: any[]) => any;
	handleSubmit: (data: any) => any;
}

const UserRegist = (props: Props) => {
	return (
		<Container>
			<form onSubmit={props.handleSubmit}>
				<div className="row">
					<div className="label">Nickname</div>
					<input
						className="input"
						name="nickname"
						minLength={props.minNicknameLength}
						maxLength={props.maxNicknameLength}
						ref={props.register({
							required: true,
						})}
					/>
				</div>
				<div className="row">
					<div className="label">Message</div>
					<input className="input" name="message" ref={props.register} />
				</div>
				{props.errorMessage && <div className="error">{props.errorMessage}</div>}
				<button className="regist" type="submit">
					Regist
				</button>
			</form>
		</Container>
	);
};

UserRegist.defaultProps = {
	minNicknameLength: 4,
	maxNicknameLength: 16,
	register: () => {},
	handleSubmit: () => {},
};

export default UserRegist;
