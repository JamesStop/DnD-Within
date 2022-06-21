import React from 'react';
import { Link } from 'react-router-dom';

function ClassInfoModal({
	currentChar,
	setCurrentChar,
	setLookingClass,
	lookingClass,
}) {
	function cancelClass() {
		setLookingClass(null);
	}

	function setCurrentClass() {
		setCurrentChar({ ...currentChar, class: lookingClass });
	}

	if (lookingClass) {
		return (
			<div className='info-modal'>
				<section className='modal-info'>
					<div className='modal-head-wrapper'>
						<h3 className='modal-title'>{lookingClass}</h3>
						<button onClick={cancelClass} className='close-modal-button'>
							X
						</button>
					</div>
					<div className='modal-body-wrapper'></div>
					<div className='modal-foot-wrapper'>
						<Link
							to='/Races'
							onClick={() => {
								cancelClass();
								setCurrentClass();
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

export default ClassInfoModal;
