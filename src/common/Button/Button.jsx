import React from 'react';

const Button = ({ buttonText, className, clickHandler }) => (
	// Returning a button with basic functionality
	<button onClick={clickHandler} className={className}>
		{buttonText}
	</button>
);

export default Button;
