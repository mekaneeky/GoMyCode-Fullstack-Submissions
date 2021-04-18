import React, { useState } from 'react';
import Filter from './Filter'
import MovieList from './MovieList'
import { Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
 
function Home(props) {

    const [filter_text, setFilter] = useState("")

    function handleChange(string) {
        setFilter(string)
    }

    return(
        <div>
            <Container fluid>
                <Filter handleChange={handleChange} />
            </Container>
            <Container>
                <Row>
                    <MovieList filterText={filter_text} addMovie={props.addMovie} movies={props.moviesList}/>
                </Row>
            </Container>
        </div>
        )
    
}

export default Home;