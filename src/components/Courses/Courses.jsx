import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { mockedCoursesList } from '../../constants';
import { constantVariables } from '../../constants';
import './Courses.css';

function Courses(props) {
	const [list, setList] = useState(mockedCoursesList);

	const listOfCourses = list.map((course) => (
		<CourseCard key={course.id} value={course} />
	));

	const listHandler = (keyword) => {
		setList(
			keyword === ''
				? mockedCoursesList
				: list.filter(
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
						clickHandler={props.clickHandler}
					/>
				</div>
			</div>
			<div className='courses_list'>{listOfCourses}</div>
		</div>
	);
}

export default Courses;
