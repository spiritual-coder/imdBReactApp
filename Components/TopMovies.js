import React, { useState, useEffect } from 'react';
import MovieResults from './MovieResults.js';

export default function TopMovies() {

  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('');

  var url = `https://api.themoviedb.org/3/discover/movie?api_key=338f4376f5a74bedfa6b37ea5c054802&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

  const handleCategoryChange = (category) => {
    setCategory(category);
    if(category=="Popularity") {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=338f4376f5a74bedfa6b37ea5c054802&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    }
    
  }



  useEffect(async () => {
    const res = await fetch(url);
  	const data  = await res.json();
  	setMovies(data.results);
  	
  });
        
		return (
		<>
			<div className="topMovies">
				<div>
					<h1><span className="gray">Poll: </span>Top Movies</h1>
				</div>

				<div id="form">
          <select name="category" value={category} onChange={event => handleCategoryChange(event.target.value)}>
              <option>Sort</option>
              <option id="0" >Popularity</option>
              <option id="1" >Revenue</option>
          </select>			
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