import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {

    let movies_elements = [];
    for (let movie of props.movies) {
        if (movie.name.toLowerCase().includes(props.filterText.toLowerCase()) || props.filterText === "") {
    
            movies_elements.push(
                <MovieCard 
                name={movie.name} 
                desc={movie.desc} 
                rating={movie.rating} 
                photo={movie.photo} />
            )} else {
                continue;
        }
    }
       
    return (
        movies_elements
    );
    

}

export default MovieList;