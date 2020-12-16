import React from "react";

export default function MovieResults({movie}){
    return (
         <div className="card">
            <img className="cardImage"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
         </div>
    )
}