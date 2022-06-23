import React from 'react';
import { Link } from 'react-router-dom';

function RaceInfoModal({
	currentChar,
	setCurrentChar,
	lookingRace,
	setLookingRace,
	lookingRaceInfo,
}) {
	function cancelRace() {
		setLookingRace({});
	}

	function setCurrentRace() {
		setCurrentChar({ ...currentChar, race: lookingRaceInfo });
	}

	if (lookingRaceInfo) {
		return (
			<div className='info-modal'>
				<section className='modal-info'>
					<div className='modal-head-wrapper'>
						<h3 className='modal-title'>{lookingRaceInfo.name}</h3>
						<button onClick={cancelRace} className='close-modal-button'>
							X
						</button>
					</div>
					<div className='modal-body-wrapper'>
						<section className="ability-bonuses">
							<p>Ability Score bonuses:</p>
							{lookingRaceInfo.ability_bonuses.map((ability) => {
								return (
									<p className='modal-tab-over' key={`${ability.ability_score.index}${ability.bonus}`}>
										{ability.ability_score.name}: {ability.bonus}
									</p>
								);
							})}
						</section>

						<p>{lookingRaceInfo.age}</p>
						<p>{lookingRaceInfo.language_desc}</p>
					</div>
					<div className='modal-foot-wrapper'>
						<Link
							to={`/Character/${currentChar.charName}`}
							onClick={() => {
								cancelRace();
								setCurrentRace();
							}}>
							<button className='choose-button'>choose</button>
						</Link>
					</div>
				</section>
			</div>
		);
	} else {
		return null;
	}
}

export default RaceInfoModal;