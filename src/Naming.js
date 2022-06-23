import React from 'react';
import { Link } from 'react-router-dom';

function Naming({ currentChar, setCurrentChar }) {
	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' />
			<input type='' />
			<Link to='/Classes'>
				<button type='submit'>Submit</button>
			</Link>
		</form>
	);
}

export default Naming;