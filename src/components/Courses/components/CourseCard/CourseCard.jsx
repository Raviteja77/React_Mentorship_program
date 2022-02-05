import React from 'react';
import './CourseCard.css';
import Button from '../../../../common/Button/Button';
import { mockedAuthorsList } from '../../../../constants';
import { constantVariables } from '../../../../constants';

function CourseCard({ value }) {
	const arrayOfAuthors = [];
	mockedAuthorsList.forEach((author) =>
		value.authors.forEach((courseListAuthor) => {
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
					<h3>{value.title}</h3>
					<p>{value.description}</p>
				</div>
				<div className='col-4'>
					<div className='authors'>
						<strong>Authors</strong>: {arrayOfAuthors}
					</div>
					<div>
						<strong>Duration</strong>: {value.duration}
					</div>
					<div>
						<strong>Created</strong>: {value.creationDate}
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
