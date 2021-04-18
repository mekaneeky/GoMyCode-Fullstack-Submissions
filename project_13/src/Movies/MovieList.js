import React from 'react';
import MovieCard from './MovieCard';
import MovieForm from './MovieForm';

function MovieList(props) {

    let movies_elements = [];
    console.log(props.movies)
    for (let movie of props.movies) {

        if (movie.movie_name === undefined) {
            continue;
        }
        if (movie.movie_name.toLowerCase().includes(props.filterText.toLowerCase()) || props.filterText === "") {
            
            movies_elements.push(
                <MovieCard
                key={movie.id}
                movie_id={movie.id}
                movie_name={movie.movie_name} 
                desc={movie.desc} 
                rating={movie.rating} 
                photo={movie.photo}
                trailer={movie.trailer}
                />
            )} else {
                continue;
        }
    }
       
    return (
        <React.Fragment>
        {movies_elements}
        <MovieForm addMovie={props.addMovie} />
        </React.Fragment>
    );
    

}

export default MovieList;