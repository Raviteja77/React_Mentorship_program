import React from 'react';

const Button = (props) => (
	<button onClick={props.clickHandler} className={props.className}>
		{props.buttonText}
	</button>
);

export default Button;
