import React, { useState } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { constantVariables } from '../../../../constants';

function SearchBar(props) {
	const [searchText, setSearchtext] = useState('');

	function searchTextChange(event) {
		// Stores the search text in searchtext, any chance occurs in search input field
		setSearchtext(event.target.value);
	}

	return (
		<div className='row'>
			<div className='col-8'>
				<Input
					typeText={constantVariables.TEXT_TYPE}
					placeholderText={constantVariables.COURSE_NAME_PLACEHOLDER}
					changeHandler={searchTextChange}
				/>
			</div>
			<div className='col-4'>
				<Button
					buttonText={constantVariables.SEARCH}
					className='btn btn-outline-dark'
					clickHandler={() => props.clickHandler(searchText)}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
