import React from 'react';
import './Input.css';

const Input = (props) => {
	// Returning input with label tag and without label tag
	// can be used based on condition
	return props.labelText ? (
		<div className='label-input'>
			<label htmlFor={props.labelText}>{props.labelText}</label>
			<input
				type={props.typeText}
				className='form-control me-2'
				placeholder={props.placeholderText}
				onChange={props.changeHandler}
			/>
		</div>
	) : (
		<input
			type={props.typeText}
			className='form-control me-2'
			placeholder={props.placeholderText}
			onChange={props.changeHandler}
		/>
	);
};

export default Input;
