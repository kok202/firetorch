import React from 'react';
import { Container } from './index.styles';

interface Props {
	counter: number;
	handleClearCounter: () => any;
	handleAddCounter: () => any;
	handleSubCounter: () => any;
}

const Counter = (props: Props) => {
	return (
		<Container>
			<div className="counter">{props.counter}</div>
			<div className="handler">
				<div className="button" onClick={props.handleClearCounter}>
					Clear
				</div>
				<div className="button" onClick={props.handleAddCounter}>
					Add
				</div>
				<div className="button" onClick={props.handleSubCounter}>
					Sub
				</div>
			</div>
		</Container>
	);
};

Counter.defaultProps = {
	counter: 0,
	handleClearCounter: () => {},
	handleAddCounter: () => {},
	handleSubCounter: () => {},
};

export default Counter;
