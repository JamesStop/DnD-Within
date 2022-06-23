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
		background: {},
	  }



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
			});

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
						<li>Characters</li>
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
							path='/Character/:currentCharName'
							element={
								<CurrentCharDisplay
									SIMPLE_URL={SIMPLE_URL}
									currentChar={currentChar}
								/>
							}
						/>
						<Route path='/Characters' element={<AllCharsDisplay />} />
					</Routes>
				</div>
			</main>
			<footer>footer</footer>
		</div>
	);
}

export default App;
