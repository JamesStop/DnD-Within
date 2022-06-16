import React, { useState, useEffect } from 'react';

function ClassSelector({ classes }) {


return (
	<div>
		{classes.map((singleClass) => {
			return <div>{singleClass.index}</div>;
		})}
	</div>
);

    
}

export default ClassSelector;
