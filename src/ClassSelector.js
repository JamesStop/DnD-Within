import React, { useState, useEffect } from 'react';

function ClassSelector({ classes }) {
	const BASE_URL = 'https://www.dnd5eapi.co/api/';




return (
	<div>
		{classes.map((singleClass) => {
			return <div>{singleClass.index}</div>;
		})}
	</div>
);


    

    

    
}

export default ClassSelector;
