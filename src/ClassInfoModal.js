import React from 'react';
import { Link } from 'react-router-dom';

function ClassInfoModal({ currentChar, setCurrentChar }) {
	function cancelClass() {
        setCurrentChar({...currentChar, class: null})
    }

	if (currentChar.class) {
		return (
			<div className='info-modal'>
				<section className='modal-info'>
					<div className='modal-head-wrapper'>
						<button onClick={cancelClass}>close</button>
						{currentChar.class}
					</div>
					<div className='modal-body-wrapper'></div>
					<div className='modal-foot-wrapper'>
						<Link to='/Races'>
							<button>choose</button>
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
