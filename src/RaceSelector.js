import React from 'react';

function RaceSelector({races}) {
    return (
			<div>
				<div className='races-container'>
					{races.map((singleRace) => {
						return (
							<div className='' key={singleRace.index}>
								{singleRace.name}
							</div>
						)
					})}
				</div>
			</div>
		);
}

export default RaceSelector;