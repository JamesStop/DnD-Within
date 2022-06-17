import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ClassSelector({ classes, setCurrentChar }) {



	return (
		<div className='classes-container'>
			{classes.map((singleClass) => {
				return (
					<Link className='class-card'  to='/Races'>
						<div key={singleClass.index}>
							<span>{singleClass.name}</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default ClassSelector;
