import React from 'react';
import { useState, useEffect } from 'react';
import { Simulate } from 'react-dom/test-utils';

function FeatureInfo({
	feature,
	SIMPLE_URL,
}) {
	const [description, setDescription] = useState([])

	useEffect(() => {
		fetch(`${SIMPLE_URL}${feature.url}`)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setDescription(res.desc);
			});
	}, []);


	if (description.length) {
		return (
			<div className="feature-wrapper">
					<span className='feature-names'>{feature.name}</span>:
					<div className='description-chunk'>
						{description.map((description) => {
							return (
								<span key={`${feature.index}${description}`}>
									{description}
								</span>
							);
						})}
					</div>
			</div>
		);
	}
	
}

export default FeatureInfo;
