import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Naming({ currentChar, setCurrentChar }) {
	function handleSubmit(event) {
		event.preventDefault();
        setCurrentChar({ ...currentChar, charName: nameValue, currentLevel: levelValue });
        console.log(currentChar)
	}

    const [nameValue, setNameValue] = useState('');
    const [levelValue, setLevelValue] = useState(1);

    function handleNameChange(event) {
        setNameValue(event.target.value)
    }

    function handleLevelChange(event) {
        setLevelValue(event.target.value);
    }

	return (
		<form className='naming-form' onSubmit={handleSubmit}>
			<label htmlFor='name-select'>Set name:</label>
			<input
				className='name-input'
				type='text'
				id='name-select'
				value={nameValue}
				onChange={handleNameChange}
				required
			/>
			<label htmlFor='level-select'>Set level:</label>
			<input
				className='level-input'
				type='number'
				min='1'
				max='20'
				id='level-select'
				onChange={handleLevelChange}
				value={levelValue}
				required
			/>
			<Link to='/Classes'>
			<button className='form-submit' type='submit'>
				Submit
			</button>
			</Link>
		</form>
	);
}

export default Naming;