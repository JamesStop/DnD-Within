import React from 'react';
import { Link } from 'react-router-dom';

function RaceInfoModal({ currentChar, setCurrentChar }) {
	function cancelRace() {
		setCurrentChar({ ...currentChar, race: null });
	}

	if (currentChar.race) {
		return (
			<div className='info-modal'>
				<section className='modal-info'>
					<div className='modal-head-wrapper'>
						<h3 className='modal-title'>{currentChar.race}</h3>
						<button onClick={cancelRace} className='close-modal-button'>
							X
						</button>
					</div>
					<div className='modal-body-wrapper'></div>
					<div className='modal-foot-wrapper'>
						<Link to='/Backgrounds'>
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