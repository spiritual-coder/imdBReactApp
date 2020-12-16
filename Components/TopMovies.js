import React, { useState, useEffect } from 'react';
import MovieResults from './MovieResults.js';

export default function TopMovies() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=338f4376f5a74bedfa6b37ea5c054802`;
    const fetchMovies = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    };

    fetchMovies();
  }, []);
  
		return (
		<>
			<div className="topMovies">
				<div>
					<h1><span className="gray">Poll: </span>Top Movies</h1>
				</div>

				
				<div className="card-list">
					{movies.filter(movie => movie.poster_path).map(movie => (
	                   <MovieResults movie={movie} key={movie.id} />
	                ))}
	      </div>
			</div>
		</>
		)
	
}