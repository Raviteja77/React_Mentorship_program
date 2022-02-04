import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [isButtonClick, setIsButtonClicked] = useState(false);

	const showCourseHandler = () => {
		setIsButtonClicked(!isButtonClick);
	};

	return (
		<div>
			<Header />
			{isButtonClick ? (
				<CreateCourse clickHandler={showCourseHandler} />
			) : (
				<Courses clickHandler={showCourseHandler} />
			)}
		</div>
	);
}
export default App;
