import React from 'react';

function CurrentCharDisplay({currentChar}) {



    return (
			<div className='character-info-display'>
				<p className='character-name-display'>{currentChar.charName}</p>
				<p className='character-level-display'>Level: {currentChar.currentLevel}</p>
                <div className="more-info-display">
                    <section>
                        <p>Class: {currentChar.class}</p>
                    </section>
                    <section>
                        <p>Race: {currentChar.race}</p>
                    </section>
                </div>
			</div>
		);
}

export default CurrentCharDisplay;