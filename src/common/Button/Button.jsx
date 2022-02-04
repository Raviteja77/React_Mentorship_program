import React from 'react';

const Button = (props) => (
	// Returning a button with basic functionality
	<button onClick={props.clickHandler} className={props.className}>
		{props.buttonText}
	</button>
);

export default Button;
