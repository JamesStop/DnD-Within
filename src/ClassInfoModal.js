import React from 'react';
import { Link } from 'react-router-dom';

function ClassInfoModal({ currentChar, setCurrentChar }) {
	function cancelClass() {
		setCurrentChar({ ...currentChar, class: null });
	}

	if (currentChar.class) {
		return (
			<div className='info-modal'>
				<section className='modal-info'>
					<div className='modal-head-wrapper'>
						<h3 className='modal-title'>{currentChar.class}</h3>
						<button onClick={cancelClass} className='close-modal-button'>
							X
						</button>
					</div>
					<div className='modal-body-wrapper'></div>
					<div className='modal-foot-wrapper'>
						<Link to='/Races'>
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

export default ClassInfoModal;
