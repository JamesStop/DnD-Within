import React from 'react';
import { Link } from 'react-router-dom';

function RaceInfoModal({
	currentChar,
	setCurrentChar,
	lookingRace,
	setLookingRace,
}) {
	function cancelRace() {
		setLookingRace(null);
	}

	function setCurrentRace() {
		setCurrentChar({ ...currentChar, race: lookingRace });
	}

	if (lookingRace) {
		return (
			<div className='info-modal'>
				<section className='modal-info'>
					<div className='modal-head-wrapper'>
						<h3 className='modal-title'>{lookingRace}</h3>
						<button onClick={cancelRace} className='close-modal-button'>
							X
						</button>
					</div>
					<div className='modal-body-wrapper'></div>
					<div className='modal-foot-wrapper'>
						<Link to='/Backgrounds' onClick={() => {
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