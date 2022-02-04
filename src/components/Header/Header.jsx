import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { constantVariables } from '../../constants';
import './Header.css';

function Header() {
	return (
		<div className='header'>
			<nav className='navbar navbar-expand-lg navbar-light'>
				<div className='container-fluid'>
					<Logo />
					<div className='d-flex'>
						<strong className='username'>{constantVariables.USER_NAME}</strong>
						<Button
							buttonText={constantVariables.LOGOUT}
							className='btn btn-outline-danger'
						></Button>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
