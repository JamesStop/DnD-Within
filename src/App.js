import React, {useState, useEffect} from "react";
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Homepage from "./Homepage";
import AllCharsDisplay from "./AllCharsDisplay";
import BackgroundsSelector from "./BackgroundsSelector";
import RaceSelector from "./RaceSelector";
import ClassSelector from "./ClassSelector";
import CurrentCharDisplay from "./CurrentCharDisplay";


function App() {

  	const BASE_URL = 'https://www.dnd5eapi.co/api/'
  	const BLANK_CHAR = {
		name: '',
		level: 1,
		class: {},
		race: {},
		background: {},
	  }



  	const [currentChar, setCurrentChar] = useState({})
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
						<Link to='/Classes'>
							<li>Character creator</li>
						</Link>
						<li>Characters</li>
					</ul>
				</nav>
				<div className='display-wrapper'>
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route
							path='/Classes'
							element={
								<ClassSelector
									classes={classes}
									setCurrentChar={setCurrentChar}
								/>
							}
						/>
						<Route path='/Races' element={<RaceSelector races={races} />} />
						<Route path='/Backgrounds' element={<BackgroundsSelector />} />
						<Route path={`/${currentChar}`} element={<CurrentCharDisplay />} />
						<Route path='/Characters' element={<AllCharsDisplay />} />
					</Routes>
				</div>
			</main>
			<footer>footer</footer>
		</div>
	);
}

export default App;
