import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function StarRating(props) {
    let stars_arr = [];
    for (let i = 0; i < 5; i++ ) {
        
        if (i+1 > props.stars) {
            stars_arr.push(<span className="fa fa-star"></span>)
        } else {
            stars_arr.push(<span className="fa fa-star checked"></span>)
        }
    
    }

    return(stars_arr)
}

function MovieCard(props) {
           let button_content = <Button variant="primary"><StarRating stars={props.rating} /></Button>
           
    return (
        <Col xs="6" lg="6">
            <Card>
                <Link to={"movie/" + props.movie_id }>
                    <Card.Img variant="top" src={props.photo} />
                </Link>
                <Card.Body>
                    <Card.Title>{props.movie_name}</Card.Title>
                    <Card.Text>
                    {props.desc}
                    </Card.Text>
                    {button_content}
                </Card.Body>
            </Card>
        </Col>
        );
    
}

export default MovieCard;
