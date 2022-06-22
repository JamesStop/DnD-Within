import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClassInfoModal from './ClassInfoModal';


function ClassSelector({ classes, setCurrentChar, currentChar }) {

	const [lookingClass, setLookingClass] = useState(null);
	const [moreInfoClass, setMoreInfoClass] = useState({overview: {}, levels: []})

	function handleClick(event) {
		const link = event.target.closest('.class-card')
		setLookingClass( link.id );
	}

	const SIMPLE_URL = 'https://www.dnd5eapi.co'

	useEffect(() => {
		if (lookingClass) {
			const classUrl = `${SIMPLE_URL}/api/classes/${lookingClass}`;
			const classLevelsUrl = `${SIMPLE_URL}/api/classes/${lookingClass}/levels`;
			Promise.all([fetch(classUrl), fetch(classLevelsUrl)])
				.then(function (responses) {
					return Promise.all(responses.map(function (response) {
						return response.json();
					}));
				})
				.then(function (data) {
					setMoreInfoClass({...moreInfoClass, overview: data[0], levels: data[1]})
				})
				.catch(function (err) {
					console.log(err)
				})
		} else {
			setMoreInfoClass({ overview: {}, levels: []});
		}

	}, [lookingClass])

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
				lookingClass={lookingClass}
				setLookingClass={setLookingClass}
				moreInfoClass={moreInfoClass}
			/>
		</>
	);
}

export default ClassSelector;
