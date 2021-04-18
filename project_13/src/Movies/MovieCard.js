import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Col} from 'react-bootstrap';


function StarRating(props) {
    let stars_arr = [];
    for (let i = 0; i < 5; i++ ) {
        
        if (i > props.stars) {
            stars_arr.push(<span className="fa fa-star"></span>)
        } else {
            stars_arr.push(<span className="fa fa-star checked"></span>)
        }
    
    }

    return(stars_arr)
}

function MovieCard(props) {
       
    return (
        <Col xs="6" lg="6">

            <Card>
                <Card.Img variant="top" src={props.photo} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    {props.desc}
                    </Card.Text>
                    <Button variant="primary"><StarRating stars={props.rating} /></Button>
                </Card.Body>
            </Card>
        </Col>
        );
    
}

export default MovieCard;
