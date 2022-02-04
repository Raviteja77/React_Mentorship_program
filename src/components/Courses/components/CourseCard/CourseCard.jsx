import React from 'react';
import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { mockedAuthorsList } from '../../../../constants';
import { constantVariables } from '../../../../constants';

function CourseCard(props) {
	const arrayOfAuthors = [];
	mockedAuthorsList.forEach((author) =>
		props.value.authors.forEach((courseListAuthor) => {
			if (courseListAuthor === author.id) {
				arrayOfAuthors.push(author.name);
				arrayOfAuthors.push(', ');
			}
		})
	);
	arrayOfAuthors.pop();

	return (
		<section className='course'>
			<div className='row'>
				<div className='col-8'>
					<h3>{props.value.title}</h3>
					<p>{props.value.description}</p>
				</div>
				<div className='col-4'>
					<div className='authors'>
						<strong>Authors</strong>: {arrayOfAuthors}
					</div>
					<div>
						<strong>Duration</strong>: {props.value.duration}
					</div>
					<div>
						<strong>Created</strong>: {props.value.creationDate}
					</div>
					<Button
						buttonText={constantVariables.SHOW_COURSE}
						className='btn btn-outline-success'
					/>
				</div>
			</div>
		</section>
	);
}

export default CourseCard;
