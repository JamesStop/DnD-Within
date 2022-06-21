import React from 'react';

function RaceSelector({races}) {
    return (
			<>
				<div className='races-container'>
					{races.map((singleRace) => {
						return (
							<div className='race-card' key={singleRace.index}>
								{singleRace.name}
							</div>
						)
					})}
				</div>
			</>
		);
}

export default RaceSelector;