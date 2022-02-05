import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { mockedCoursesList } from '../../constants';
import { constantVariables } from '../../constants';
import './Courses.css';

function Courses({ clickHandler }) {
	const [list, setList] = useState(mockedCoursesList);

	const listOfCourses = list.map((course) => (
		<CourseCard key={course.id} value={course} />
	));

	const listHandler = (keyword) => {
		// Handles the search operation
		// all courses will be available if search is empty
		// otherwise the searched text course will be shown
		setList(
			keyword === ''
				? mockedCoursesList
				: mockedCoursesList.filter(
						(course) =>
							course.title.toLowerCase().includes(keyword.toLowerCase()) ||
							course.id.toLowerCase().includes(keyword.toLowerCase())
				  )
		);
	};

	return (
		<div className='courses'>
			<div className='row m-2'>
				<div className='col-8'>
					<SearchBar clickHandler={listHandler} />
				</div>
				<div className='col-4 text-end'>
					<Button
						buttonText={constantVariables.ADD_NEW_COURSE}
						className='btn btn-outline-primary'
						clickHandler={clickHandler}
					/>
				</div>
			</div>
			<div className='courses_list'>{listOfCourses}</div>
		</div>
	);
}

export default Courses;
