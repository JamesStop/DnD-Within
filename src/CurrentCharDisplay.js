import React from 'react';
import FeatureInfo from './FeatureInfo';
import { useNavigate } from 'react-router-dom';

function CurrentCharDisplay({
	currentChar,
	SIMPLE_URL,
	setCurrentChar,
	allChars,
	setAllChars,
	BLANK_CHAR,
    editingMode,
    setEditingMode,
}) {

    const navigate = useNavigate();

	function handleCharCommit(event) {
		event.preventDefault();
        if (editingMode.editing) {
            const tempArray = [...allChars];
            tempArray[editingMode.index] = currentChar;
            setAllChars(tempArray);
            setEditingMode({...editingMode, editing: false})
        } else {
            setAllChars([...allChars, currentChar]);
        }
        setCurrentChar(BLANK_CHAR);
        navigate('/Characters');
	}

    if (currentChar.charName.length > 0) {
        return (
					<div className='character-info-display'>
						<p className='character-name-display'>{currentChar.charName}</p>
						<p className='character-level-display'>
							Level: {currentChar.currentLevel}
						</p>
						<div className='more-info-display'>
							<section>
								<p className='more-info-title'>
									Class: {currentChar.class.overview.name}
								</p>
								<div className='modal-body-wrapper'>
									{currentChar.class.levels
										.filter((levels) => {
											return levels.level <= currentChar.currentLevel;
										})
										.filter((levels) => {
											return levels.features.length > 0;
										})
										.map((levels) => {
											return (
												<div
													key={levels.level}
													className='features-levels-wrapper'>
													<h4 className='features-level-header'>
														Level {levels.level} benefits
													</h4>
													{levels.features.map((feature) => {
														return (
															<FeatureInfo
																key={feature.index}
																feature={feature}
																SIMPLE_URL={SIMPLE_URL}
															/>
														);
													})}
												</div>
											);
										})}
								</div>
							</section>
							<section>
								<p>Race: {currentChar.race.name}</p>
							</section>
						</div>
						<button onClick={handleCharCommit} className='commit-char-button'>
							Commit Character
						</button>
					</div>
				);
    } else {
        return (
            <div className="homepage-display">Uh Oh! Your character has run away. Please make another in the character creator navigation tab above and try again.</div>
        )
    }

	
}

export default CurrentCharDisplay;