import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClassInfoModal from './ClassInfoModal';


function ClassSelector({ classes, setCurrentChar, currentChar, SIMPLE_URL }) {
	const [lookingClass, setLookingClass] = useState(null);
	const [moreInfoClass, setMoreInfoClass] = useState({
		overview: {},
		levels: [],
	});

	function handleClick(event) {
		const link = event.target.closest('.class-card');
		setLookingClass(link.id);
	}

	

	useEffect(() => {
		if (lookingClass) {
			const classUrl = `${SIMPLE_URL}/api/classes/${lookingClass}`;
			const classLevelsUrl = `${SIMPLE_URL}/api/classes/${lookingClass}/levels`;
			Promise.all([fetch(classUrl), fetch(classLevelsUrl)])
				.then(function (responses) {
					return Promise.all(
						responses.map(function (response) {
							return response.json();
						})
					);
				})
				.then(function (data) {
					setMoreInfoClass({
						...moreInfoClass,
						overview: data[0],
						levels: data[1],
					});
				})
				
		} else {
			setMoreInfoClass({ overview: {}, levels: [] });
		}
	}, [lookingClass]);


	if (classes) {
		return (
			<>
				<div className='classes-container'>
					{classes.map((singleClass) => {
						return (
							<div
								className='class-card'
								key={singleClass.index}
								id={singleClass.index}
								onClick={handleClick}>
								<span>{singleClass.name}</span>
							</div>
						);
					})}
				</div>
				<ClassInfoModal
					currentChar={currentChar}
					setCurrentChar={setCurrentChar}
					setLookingClass={setLookingClass}
					moreInfoClass={moreInfoClass}
					SIMPLE_URL={SIMPLE_URL}
				/>
			</>
		);
	} else {
		return (
			<div className='homepage-display'>
				Something went wrong with looking through our compendium of available
				classes. Please return to the home page (by clicking the title at the
				top of the page) and refresh to start over. If this issue persists,
				please try again later as the compendium may be checked out by another
				scholar already.
			</div>
		);
	}
	
}

export default ClassSelector;
