import React, { useState, useEffect } from 'react';

function ClassSelector({ classes }) {
	return (
		<div className='classes-container'>
			{classes.map((singleClass) => {
				return (
					<div className='' key={singleClass.index}>
						{singleClass.name}
					</div>
				);
			})}
		</div>
	);
}

export default ClassSelector;
