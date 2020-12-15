import React from "react";
import NavBar from "./Components/NavBar.js";
import SearchBar from "./Components/SearchBar.js";
import TopMovies from './Components/TopMovies.js';
import Jumbo from './Components/Jumbo.js';
import TweetCard from './Components/TweetCard.js';
import LatestMovies from './Components/LatestMovies.js';

export default function AppContainer() {
	return (
		<div className="container">
			<div className="navBar"><NavBar /></div>
			<div className="sideBar"><TweetCard /></div>
			<div className="latestBar"><LatestMovies /></div>
			<div className="searchBar"><SearchBar /></div>
			<div className="jumboBar"><Jumbo /></div>
			<div className="topmoviesBar"><TopMovies /></div>
		</div>
		)
}