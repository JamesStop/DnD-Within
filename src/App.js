import React, {useState, useEffect} from "react";
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Homepage from "./Homepage";
import AllCharsDisplay from "./AllCharsDisplay";
import RaceSelector from "./RaceSelector";
import ClassSelector from "./ClassSelector";
import CurrentCharDisplay from "./CurrentCharDisplay";
import Naming from "./Naming";


function App() {

  	const BASE_URL = 'https://www.dnd5eapi.co/api/'
	const SIMPLE_URL = 'https://www.dnd5eapi.co';
  	const BLANK_CHAR = {
		charName: '',
		currentLevel: 1,
		class: {},
		race: {},
	  }

	
	const [editingMode, setEditingMode] = useState({editing: false, index: 0})
  	const [currentChar, setCurrentChar] = useState(BLANK_CHAR);
  	const [allChars, setAllChars] = useState([])

  	const [classes, setClasses] = useState([]);
  	const [races, setRaces] = useState([]);

	useEffect(() => {
		const classesUrl = `${BASE_URL}classes/`;
		fetch(classesUrl)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setClasses(res.results);
			})
			

        const racesUrl = `${BASE_URL}races/`;
			fetch(racesUrl)
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					setRaces(res.results);
				});
	}, []);











  return (
		<div>
			<header>
				<Link to='/'>
					<h1>DnD Within</h1>
				</Link>
			</header>
			<main>
				<nav>
					<ul className='main-navs'>
						<Link to='/Naming'>
							<li>Character creator</li>
						</Link>
						<Link to='/Characters'>
							<li>Characters</li>
						</Link>
					</ul>
				</nav>
				<div className='display-wrapper'>
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route
							path='/Naming'
							element={
								<Naming
									currentChar={currentChar}
									setCurrentChar={setCurrentChar}
								/>
							}
						/>
						<Route
							path='/Classes'
							element={
								<ClassSelector
									classes={classes}
									setCurrentChar={setCurrentChar}
									currentChar={currentChar}
									SIMPLE_URL={SIMPLE_URL}
								/>
							}
						/>
						<Route
							path='/Races'
							element={
								<RaceSelector
									races={races}
									setCurrentChar={setCurrentChar}
									currentChar={currentChar}
									SIMPLE_URL={SIMPLE_URL}
								/>
							}
						/>
						<Route
							path='/Character'
							element={
								<CurrentCharDisplay
									SIMPLE_URL={SIMPLE_URL}
									currentChar={currentChar}
									setCurrentChar={setCurrentChar}
									allChars={allChars}
									setAllChars={setAllChars}
									BLANK_CHAR={BLANK_CHAR}
									editingMode={editingMode}
									setEditingMode={setEditingMode}
								/>
							}
						/>
						<Route
							path='/Characters'
							element={
								<AllCharsDisplay
									allChars={allChars}
									editingMode={editingMode}
									setEditingMode={setEditingMode}
									currentChar={currentChar}
									setCurrentChar={setCurrentChar}
								/>
							}
						/>
					</Routes>
				</div>
			</main>
			<footer>&copy;2022 James Stoppani</footer>
		</div>
	);
}

export default App;
