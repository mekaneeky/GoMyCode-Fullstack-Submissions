import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Movies/Filter'
import MovieList from './Movies/MovieList'
import { Container, Row } from 'react-bootstrap';


let movies_list = [
    {
        name:"The Matrix",
        desc:"Simulation and Simulacra in film",
        rating:5,
        photo:"./1.jpg"
    },
    {
        name:"Test film",
        desc:"A movie about unit tests taking over the world",
        rating:2,
        photo:"./2.jpg"
    },
    {
        name:"The Revenge of the ;",
        desc:"A developer forgets a ; and causes WWIII",
        rating:1,
        photo:"./3.jpg"
    },
    {
        name:"Compiler Blues",
        desc:"Rise and Fall of the Digital Mars Compiler",
        rating:5,
        photo:"./4.jpg"
    }
]

function App() {
    
    const [filter_text, setFilter] = useState("")
    
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
                    <MovieList filterText={filter_text} movies={movies_list}/>
                </Row>
            </Container>
        </div>
    );
    
}

export default App;
