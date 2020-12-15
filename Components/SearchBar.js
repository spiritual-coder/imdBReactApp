import React, {useState} from "react";
import MovieResults from './MovieResults.js';

export default function SearchBar() {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);

	const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=338f4376f5a74bedfa6b37ea5c054802&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

	return (
		<>
			<div className="explore">
				<h1>Explore</h1>
				<form className="form" onSubmit={searchMovies}>
					<input className="input" type="text" name="query"
					placeholder="Find Movies, TV shows, Celebrities and more..."
					value={query} onChange={(e) => setQuery(e.target.value)} />
				</form>

				<div className="card-list">
					{movies.filter(movie => movie.poster_path).map(movie => (
	                   <MovieResults movie={movie} key={movie.id} />
	                ))}
	      </div>
			</div>
		</>
		)
}