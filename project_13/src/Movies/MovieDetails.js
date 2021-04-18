import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


function MoiveInnerDetails(props) {
    let {movieId} = useParams(); 
    let movie_to_choose = props.moviesList[movieId];

    if (movie_to_choose === undefined) {
        return(
            <Movie404 />
        )
    }
    return (
        <Container fluid>
            <Row>
                <Col xs="12">
                    <h1> {movie_to_choose.movie_name} </h1>
                </Col>
                <Col xs="12">
                    <p> {movie_to_choose.desc} </p>
                </Col>
                <Col xs="12">
                    <iframe src={movie_to_choose.trailer} />
                </Col>
                <Col xs="12">
                    <Link to="/">
                        <h3>Flee to the Homepage</h3>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

function Movie404(props) {
    return(
        <Container fluid style={{alignContent:"center", justifyContent:"center"}}>
            <Row>
                <Col class="stuff-404" xs="12">
                    <h1>404</h1>
                    <h3>Trespassers will be shot</h3>
                    <Link to={"/"}>
                        <h3>Flee NOW ! RUN !</h3>
                    </Link>
                </Col>
            </Row>
        </Container>

    )
}

function MovieDetails(props) {
    let match = useRouteMatch();

    return (

        <Switch>
            <Route path={`${match.path}/:movieId`}>
                <MoiveInnerDetails moviesList={props.moviesList} />                
            </Route>
            <Route path={match.path}>
                <Movie404 />
            </Route>
      </Switch>
        
    )
}

export default MovieDetails;