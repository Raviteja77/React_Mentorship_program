import React from 'react';
import './Input.css';

const Input = ({ changeHandler, labelText, placeholderText, typeText }) => {
	// Returning input with label tag and without label tag
	// can be used based on condition
	return labelText ? (
		<div className='label-input'>
			<label htmlFor={labelText}>{labelText}</label>
			<input
				type={typeText}
				className='form-control me-2'
				placeholder={placeholderText}
				onChange={changeHandler}
			/>
		</div>
	) : (
		<input
			type={typeText}
			className='form-control me-2'
			placeholder={placeholderText}
			onChange={changeHandler}
		/>
	);
};

export default Input;
