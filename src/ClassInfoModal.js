import React from 'react';
import { Link } from 'react-router-dom';

function ClassInfoModal({ currentChar, setCurrentChar }) {
	function cancelClass() {
        setCurrentChar({...currentChar, class: null})
    }

	if (currentChar.class) {
		return (
			<div className='class-info-modal'>
				<button onClick={cancelClass}>close</button>
				{currentChar.class}
				<Link to='/Races'>
					<button>choose</button>
				</Link>
			</div>
		);
	} else {
        return null;
    }
}

export default ClassInfoModal;
