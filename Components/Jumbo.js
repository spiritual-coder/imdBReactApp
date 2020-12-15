import React, {useState} from "react";


export default function TopMovies() {
	/*const [query, setQuery] = useState('');
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
    }*/

	return (
		<>
			<div className="jumboBox">
				<div className="mainvideo">
					<iframe width="560" height="340" src="https://www.youtube.com/embed/7TavVZMewpY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<div class="followus">
					<h3>Follow us on Facebook</h3>
				</div>
				<div className="snapshot">
					<h3>IMDb Snapshot</h3>
				</div>
				<div className="othervideo">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/WHXxVmeGQUc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				<div className="viewall">
					<h3>VIEW ALL</h3>
				</div>
				<div className="iMDb">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1200px-IMDb_Logo_Square.svg.png" />
				</div>
			</div>
		</>
		)
}