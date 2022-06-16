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

  const [currentChar, setCurrentChar] = useState({})
  const [allChars, setAllChars] = useState([])

  const [classes, setClasses] = useState([]);

	useEffect(() => {
		const classesUrl = `${BASE_URL}classes/`;
		fetch(classesUrl)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setClasses(res.results);
				console.log(classes);
			});
	}, []);

  return (
		<div>
			<header>
				<h1>DnD Within</h1>
			</header>
			<main>
				<nav>
					<ul className='main-navs'>
						<Link to='/Class'>
							<li>Character creator</li>
						</Link>
						<li>Characters</li>
					</ul>
				</nav>
				<div>
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route
							path='/Class'
							element={<ClassSelector classes={classes}/>}
						/>
						<Route path='/Race' element={<RaceSelector />} />
						<Route path='/Background' element={<BackgroundsSelector />} />
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
