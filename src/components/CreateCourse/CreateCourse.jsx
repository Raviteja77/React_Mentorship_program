import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { mockedAuthorsList } from '../../constants';
import { mockedCoursesList } from '../../constants';
import { constantVariables } from '../../constants';
import { convertMinsToHrsMins } from '../../helpers/pipeDuration';
import './CreateCourse.css';

function CreateCourse(props) {
	const [addAuthors, setAddAuthors] = useState([]);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [createAuthor, setCreateAuthor] = useState('');
	const [calculateDuration, setCalculateDuration] = useState('');
	const [formDetails, setFormDetails] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: '',
		authors: [],
	});

	const createAuthorChange = (event) => {
		// Any change in author input will be stored in createAuthor
		setCreateAuthor(event.target.value);
	};

	const createAuthorHandler = () => {
		// Handles validation of author input and update authorsList
		// as well as mockedAuthorsList to have it always
		if (createAuthor.length < 2) {
			alert('Please enter atleast 2 characters...');
			return;
		}
		const id = 'id' + Math.random().toString(16).slice(2);
		setAuthorsList([
			...authorsList,
			{
				id: id,
				name: createAuthor,
			},
		]);
		mockedAuthorsList.push({
			id: id,
			name: createAuthor,
		});
	};

	const addAuthorHandler = (authorId, authorName) => {
		// updates addAuthors to show in course authors with the data and
		// also updates authorList. So that added author will not be available
		//  in the authors list. Also triigers a function to store the data in formDetails
		setAddAuthors([
			...addAuthors,
			{
				id: authorId,
				name: authorName,
			},
		]);
		setAuthorsList(authorsList.filter((author) => author.id !== authorId));
		addAuthorsToFormDetails(authorId);
	};

	const addAuthorsToFormDetails = (authorId) => {
		// updates formDetails with authorsId
		let authorsId = [];
		authorsList.forEach((author) => {
			if (author.id === authorId) {
				authorsId.push(author.id);
			}
		});
		setFormDetails({ ...formDetails, authors: authorsId });
	};

	const deleteAuthorHandler = (authorId, authorName) => {
		// Updates authorsList to show authors in author list
		// and also removes the authors in course authors
		setAuthorsList([
			...authorsList,
			{
				id: authorId,
				name: authorName,
			},
		]);
		setAddAuthors(addAuthors.filter((author) => author.id !== authorId));
	};

	const durationHandler = (event) => {
		// Handles duration changes and convert mins to HrsMins format
		// Also updates the formDetails with neccessary data
		const today = new Date().toISOString().slice(0, 10);
		const hours = convertMinsToHrsMins(event.target.value);
		setCalculateDuration(hours);
		setFormDetails({
			...formDetails,
			duration: hours,
			id: 'id' + Math.random().toString(16).slice(2),
			creationDate: today.split('-').reverse().join('/'),
		});
	};

	const submitHandler = () => {
		// Alerts if any detail misses otherwise adds to courseList
		if (
			formDetails.creationDate !== '' &&
			formDetails.description !== '' &&
			formDetails.duration !== '' &&
			formDetails.id !== '' &&
			formDetails.title !== '' &&
			formDetails.authors.length !== 0
		) {
			alert(
				`New course ${formDetails.title.toUpperCase()} created successfully`
			);
			mockedCoursesList.push(formDetails);
			props.clickHandler();
		} else {
			alert('Please, fill all details');
		}
	};

	return (
		<section className='create_course'>
			<div className='row m-2'>
				<div className='col-6'>
					<Input
						typeText={constantVariables.TEXT_TYPE}
						labelText={constantVariables.LABEL_TITLE}
						placeholderText={constantVariables.TITLE_PLACEHOLDER}
						changeHandler={(event) =>
							setFormDetails({ ...formDetails, title: event.target.value })
						}
					/>
				</div>
				<div className='col-6 text-end'>
					<Button
						buttonText={constantVariables.CREATE_COURSE}
						className='btn btn-outline-primary mt-4'
						clickHandler={submitHandler}
					/>
				</div>
			</div>
			<div className='description'>
				<label>Description</label>
				<textarea
					name='description'
					className='description__text'
					cols='160'
					rows='5'
					onChange={(event) =>
						setFormDetails({ ...formDetails, description: event.target.value })
					}
				/>
			</div>
			<div className='main-content'>
				<div className='row'>
					<div className='col-6'>
						<strong>Add Author</strong>
						<Input
							typeText={constantVariables.TEXT_TYPE}
							labelText={constantVariables.LABEL_AUTHOR_NAME}
							placeholderText='Enter author name...'
							changeHandler={createAuthorChange}
						/>
						<Button
							buttonText={constantVariables.CREATE_AUTHOR}
							className='btn btn-outline-primary m-5'
							clickHandler={createAuthorHandler}
						/>
					</div>
					<div className='col-6 text-center'>
						<strong>Authors</strong>
						<ul id='author1' className='row mt-1'>
							{authorsList.map((author) => (
								<li className='col-8 text-end' key={author.id}>
									{author.name}
									<Button
										buttonText={constantVariables.ADD_AUTHOR}
										className='btn btn-outline-success'
										clickHandler={() =>
											addAuthorHandler(author.id, author.name)
										}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='row'>
					<div className='col-6'>
						<strong>Duration</strong>
						<Input
							typeText={constantVariables.TEXT_TYPE}
							labelText={constantVariables.LABEL_DURATION}
							placeholderText={constantVariables.DURATION_PLACEHOLDER}
							changeHandler={durationHandler}
						/>
					</div>
					<div className='col-6 text-center'>
						<strong>Course authors</strong>
						<ul>
							{addAuthors.length === 0
								? 'Author list is empty'
								: addAuthors.map((author) => (
										<li key={author.id}>
											{author.name}
											<Button
												buttonText={constantVariables.DELETE_AUTHOR}
												className='btn btn-outline-danger'
												clickHandler={() =>
													deleteAuthorHandler(author.id, author.name)
												}
											/>
										</li>
								  ))}
						</ul>
					</div>
				</div>
				<div>
					Duration: <span>{calculateDuration}</span>
				</div>
			</div>
		</section>
	);
}

export default CreateCourse;
