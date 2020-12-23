import React, { useState, useEffect } from "react";
import MovieResults from "./MovieResults.js";
import History from "./History.js";

export default function SearchBar(location) {
  const [qname, setQname] = useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q");

    setQname(q ? q : "Harry");
    //eslint-disable-next-line
  }, []);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=338f4376f5a74bedfa6b37ea5c054802&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setQname(query);
      setMovies(data.results);
      History.push("search?q=" + query);
    } catch (err) {
      console.error(err);
    }

    setQuery("");
  };

  return (
    <>
      <div className="explore">
        <h1>Explore</h1>

        <form className="form" onSubmit={searchMovies}>
          <input
            className="input"
            type="text"
            name="query"
            placeholder="Find Movies, TV shows, Celebrities and more..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* <button className="button" type="submit">Search</button> */}

          <button className="button" type="submit">
            Search
          </button>
        </form>

        <div className="card-list">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieResults movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </>
  );
}
