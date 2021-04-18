import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Movies/Filter'
import MovieList from './Movies/MovieList'
import Home from './Movies/Home'
import MovieDetails from './Movies/MovieDetails'
import { Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  
var movies_list_init = [
    {
        id:0,
        movie_name:"The Matrix",
        desc:"Simulation and Simulacra in film",
        rating:5,
        photo:"./1.jpg",
        trailer:"https://www.youtube.com/embed/m8e-FF8MsqU"
    },
    {
        id:1,
        movie_name:"Test film",
        desc:"A movie about unit tests taking over the world",
        rating:2,
        photo:"./2.jpg",
        trailer:"https://www.youtube.com/embed/sTSA_sWGM44"
    },
    {
        id:2,
        movie_name:"The Revenge of the ;",
        desc:"A developer forgets a ; and causes WWIII",
        rating:1,
        photo:"./3.jpg",
        trailer:"https://www.youtube.com/embed/sTSA_sWGM44"

    },
    {
        id:3,
        movie_name:"Compiler Blues",
        desc:"Rise and Fall of the Digital Mars Compiler",
        rating:5,
        photo:"./4.jpg",
        trailer:"https://www.youtube.com/embed/sTSA_sWGM44"
    }
]


function App() {

    const [movies_list, setMovies] = useState(movies_list_init)
    console.log(movies_list)
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
                    photo: movie_obj.photo,
                    id: movies_list.length,
                    trailer: movie_obj.trailer
                }
            ]
        )
        console.log("aaaaah")
        console.log(movies_list)

    }

   
    return (
        <Router>
          
            <Switch>
                <Route path="/movie">
                    <MovieDetails moviesList={movies_list}  />
                </Route>
                <Route path="/">
                    <Home moviesList={movies_list} addMovie={addMovieNow} />
                </Route>
            </Switch>
            

        </Router>
    );
    
}

   



export default App;
