import React from 'react';

function AllCharsDisplay({allChars}) {



    return (
				<div className='chars-container'>
					{allChars.map((char) => {
						return (
							<div className='char-card' key={char.index} id={char.index}>
								<span>{char.charName} ({char.currentLevel})</span>
                                <span>Class: {char.class.overview.name}</span>
                                <span>Race: {char.race.name}</span>
							</div>
						);
					})}
				</div>
		);
}

export default AllCharsDisplay;