import React, { useState, useEffect } from 'react';
import RaceInfoModal from './RaceInfoModal';

function RaceSelector({ races, setCurrentChar, currentChar, SIMPLE_URL }) {
	const [lookingRace, setLookingRace] = useState(null);
	const [lookingRaceInfo, setLookingRaceInfo] = useState(null);

	function handleClick(event) {
		const link = event.target.closest('.race-card');
		setLookingRace(link.id);
	}

	useEffect(() => {
		if (lookingRace) {
			const raceUrl = `${SIMPLE_URL}/api/races/${lookingRace}`;
			fetch(raceUrl)
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					setLookingRaceInfo(res);
				})
				
		} else {
			setLookingRaceInfo(null);
		}
	}, [lookingRace]);


	if (races) {
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
					lookingRaceInfo={lookingRaceInfo}
				/>
			</>
		);
	} else {
		return (
			<div className='homepage-display'>
				Something went wrong with looking through our compendium of available
				races. Please return to the home page (by clicking the title at the top
				of the page) and refresh to start over. If this issue persists, please
				try again later as the compendium may be checked out by another scholar
				already.
			</div>
		);
	}
	
}

export default RaceSelector;
