import React, { useState } from 'react';
import useFormat from '../../../hooks/useFormat';
import { Container } from './index.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

interface Props {}

const NavigationBar = (props: Props) => {
	const { format } = useFormat();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Container>
			<div className="buttons">
				<NavLink className="logo" to="/">
					{format('Logo')}{' '}
				</NavLink>
				<div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
					<FontAwesomeIcon icon={faBars} size="2x" />
				</div>
			</div>
			<div className="content">
				<div className={`list ${isOpen && 'open'}`}>
					<div className="item">
						<NavLink className="link" to="/">
							Home
						</NavLink>
					</div>
					<div className="item">
						<NavLink className="link" to="/about">
							About
						</NavLink>
					</div>
					<div className="item">
						<NavLink className="link" to="/counter">
							Counter
						</NavLink>
					</div>
					<div className="item">
						<NavLink className="link" to="/user">
							User
						</NavLink>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default NavigationBar;
