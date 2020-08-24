import React from 'react';
import logo from 'src/logo.svg';
import './index.styles.ts';
import { Container } from './index.styles';

interface Props {}

const About = (props: Props) => {
	return (
		<Container>
			<div className="about">About : hello world!</div>
		</Container>
	);
};

export default About;
