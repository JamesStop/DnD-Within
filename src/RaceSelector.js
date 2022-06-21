import React, { useState, useEffect } from 'react';
import RaceInfoModal from './RaceInfoModal';

function RaceSelector({ races, setCurrentChar, currentChar }) {
	const [lookingRace, setLookingRace] = useState(null);

	function handleClick(event) {
		const link = event.target.closest('.race-card');
		setLookingRace(link.id);
	}

	return (
		<>
			<div className='races-container'>
				{races.map((singleRace) => {
					return (
						<div
							className='race-card'
							key={singleRace.index}
							id={singleRace.index}
							onClick={handleClick}>
							{singleRace.name}
						</div>
					);
				})}
			</div>
			<RaceInfoModal
				currentChar={currentChar}
				setCurrentChar={setCurrentChar}
				setLookingRace={setLookingRace}
				lookingRace={lookingRace}
			/>
		</>
	);
}

export default RaceSelector;
