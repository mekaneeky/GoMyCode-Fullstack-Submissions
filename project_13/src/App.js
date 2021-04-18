import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Movies/Filter'
import MovieList from './Movies/MovieList'
import { Container, Row } from 'react-bootstrap';


let movies_list_init = [
    {
        movie_name:"The Matrix",
        desc:"Simulation and Simulacra in film",
        rating:5,
        photo:"./1.jpg"
    },
    {
        movie_name:"Test film",
        desc:"A movie about unit tests taking over the world",
        rating:2,
        photo:"./2.jpg"
    },
    {
        movie_name:"The Revenge of the ;",
        desc:"A developer forgets a ; and causes WWIII",
        rating:1,
        photo:"./3.jpg"
    },
    {
        movie_name:"Compiler Blues",
        desc:"Rise and Fall of the Digital Mars Compiler",
        rating:5,
        photo:"./4.jpg"
    }
]


function App() {
    
    const [filter_text, setFilter] = useState("")
    const [movies_list, setMovies] = useState(movies_list_init)

    

    function addMovieNow(movie_obj) {
        console.log("called!")

        if (movie_obj.movie_name === undefined){
            return 
        }
        setMovies(
            [
                ...movies_list,
                {
                    movie_name:movie_obj.movie_name,
                    desc:movie_obj.desc,
                    rating:movie_obj.rating,
                    photo: movie_obj.photo
                }
            ]
        )
        console.log("aaaaah")
        console.log(movies_list)

    }

    function handleChange(string) {
        setFilter(string)
    }
   
   
    return (
        <div>
            <Container fluid>
                <Filter handleChange={handleChange} />
            </Container>
            <Container>
                <Row>
                    <MovieList filterText={filter_text} addMovie={addMovieNow} movies={movies_list}/>
                </Row>
            </Container>
        </div>
    );
    
}

export default App;
