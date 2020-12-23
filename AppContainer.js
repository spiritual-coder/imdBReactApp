import React from "react";
import NavBar from "./Components/NavBar.js";
import SearchBar from "./Components/SearchBar.js";
import TopMovies from "./Components/TopMovies.js";
import Jumbo from "./Components/Jumbo.js";
import SideBar from "./Components/SideBar.js";
import LatestMovies from "./Components/LatestMovies.js";
import { Router } from "react-router-dom";
import History from "./Components/History.js";

export default function AppContainer() {
  return (
    <div className="container">
      <Router history={History}>
        <div className="navBar">
          <NavBar />
        </div>
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="latestBar">
          <LatestMovies />
        </div>
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className="jumboBar">
          <Jumbo />
        </div>
        <div className="topmoviesBar">
          <TopMovies />
        </div>
      </Router>
    </div>
  );
}
