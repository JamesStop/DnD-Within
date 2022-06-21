import React from 'react';
import RaceInfoModal from './RaceInfoModal';

function RaceSelector({ races, setCurrentChar, currentChar }) {

	function handleClick(event) {
		const link = event.target.closest('.race-card');
		setCurrentChar({ ...currentChar, race: link.id });
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
			/>
		</>
	);
}

export default RaceSelector;