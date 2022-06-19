import React from 'react';

function ClassInfoModal({ currentChar }) {
	if (currentChar.class) {
         return <div className='class-info-modal'>{currentChar.class}</div>;
    }
}

export default ClassInfoModal;
