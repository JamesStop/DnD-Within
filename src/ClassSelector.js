import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClassInfoModal from './ClassInfoModal';

function ClassSelector({ classes, setCurrentChar, currentChar }) {
	function handleClick(event) {
		const link = event.target.closest('.class-card')
		setCurrentChar({ ...currentChar, class: link.id });
	}

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
			<ClassInfoModal currentChar={currentChar} />
		</>
	);
}

export default ClassSelector;
