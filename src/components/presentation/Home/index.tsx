import React from 'react';
import logo from 'src/logo.svg';
import './index.styles.ts';
import { Container } from './index.styles';

interface Props {}

const Home = (props: Props) => {
	return (
		<Container>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{process.env.NODE_ENV}</p>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</Container>
	);
};

export default Home;
