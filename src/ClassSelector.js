import React, { useState, useEffect } from 'react';

function ClassSelector({ classes }) {
	return (
		<div className='classes-container'>
			{classes.map((singleClass) => {
				return (
					<div className='class-card' key={singleClass.index}>
						<span>{singleClass.name}</span>
					</div>
				);
			})}
		</div>
	);
}

export default ClassSelector;
