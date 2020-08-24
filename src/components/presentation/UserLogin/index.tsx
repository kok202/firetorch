import React from 'react';
import './index.styles.ts';
import { Container } from './index.styles';

interface Props {
	emailPattern: RegExp;
	minPasswordLength: number;
	errorMessage?: string;
	handleEmailSignup: () => any;
	handleEmailLoginSubmit: (data: any) => any;
	handleGoogleLogin: () => any;
	register: (...p: any[]) => any;
}

const UserLogin = (props: Props) => {
	return (
		<Container>
			<form onSubmit={props.handleEmailLoginSubmit}>
				<div className="row">
					<div className="label">email</div>
					<input
						className="input"
						name="email"
						ref={props.register({
							required: true,
							pattern: props.emailPattern,
						})}
					/>
				</div>
				<div className="row">
					<div className="label">password</div>
					<input
						type="password"
						className="input"
						name="password"
						minLength={props.minPasswordLength}
						ref={props.register({
							required: true,
						})}
					/>
				</div>
				{props.errorMessage && <div className="error">{props.errorMessage}</div>}
				<div className="row">
					<button className="email-signup" type="button" onClick={props.handleEmailSignup}>
						Sign up
					</button>
				</div>
				<div className="row">
					<button className="email-login" type="submit">
						Email login
					</button>
				</div>
			</form>
			<div className="row">
				<div className="google-login" onClick={props.handleGoogleLogin}>
					Google login
				</div>
			</div>
		</Container>
	);
};

UserLogin.defaultProps = {
	emailPattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	minPasswordLength: 6,
	handleEmailSignup: () => {},
	handleEmailLoginSubmit: () => {},
	handleGoogleLogin: () => {},
	register: () => {},
};

export default UserLogin;
