import React from 'react';
import { useNavigate } from 'react-router-dom';

function AllCharsDisplay({
	allChars,
	editingMode,
	setEditingMode,
	currentChar,
	setCurrentChar,
}) {

    const navigate = useNavigate();

	function handleClick(event) {
		setEditingMode({editing: true, index: event.target.closest('.char-card').id});
        setCurrentChar(allChars[event.target.closest('.char-card').id]);
        navigate('/Naming');
	}

    if (allChars.length > 0) {
        return (
					<div className='chars-container'>
						{allChars.map((char) => {
							return (
								<div
									className='char-card'
									key={allChars.indexOf(char)}
									id={allChars.indexOf(char)}>
									<span>
										{char.charName} ({char.currentLevel})
									</span>
									<span>Class: {char.class.overview.name}</span>
									<span>Race: {char.race.name}</span>

									<button onClick={handleClick}>Edit/View</button>
								</div>
							);
						})}
					</div>
				);

    } else {
        return (
					<div className='homepage-display'>
						Oh no! it looks like you don't have any characters! You can create
						some above in the character creator navigation tab.
					</div>
				);
    }

	
}

export default AllCharsDisplay;