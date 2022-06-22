import React from 'react';
import { useState, useEffect } from 'react';
import { Simulate } from 'react-dom/test-utils';

function FeatureInfo({
	feature,
	SIMPLE_URL,
}) {
	const [description, setDescription] = useState('')

	useEffect(() => {
		fetch(`${SIMPLE_URL}${feature.url}`)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setDescription(res.desc[0]);
			});
	}, []);

	return (
		<div>
			<p>
				<span className="feature-names">{feature.name}</span>
				: {description}
			</p>
		</div>
	);
}

export default FeatureInfo;
