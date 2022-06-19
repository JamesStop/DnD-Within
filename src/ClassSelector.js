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
						<Link
							className='class-card'
							to='/Races'
							onClick={handleClick}
							key={singleClass.index}
							id={singleClass.index}>
							<div>
								<span>{singleClass.name}</span>
							</div>
						</Link>
					);
				})}
			</div>
			<ClassInfoModal currentChar={currentChar} />
		</>
	);
}

export default ClassSelector;
