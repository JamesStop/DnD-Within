import React from 'react';
import { Link } from 'react-router-dom';

function ClassInfoModal({ currentChar }) {
	if (currentChar.class) {
		return (
			<div className='class-info-modal'>
				{currentChar.class}
				<Link to='/Races'>
					<button></button>
				</Link>
			</div>
		);
	}
}

export default ClassInfoModal;
