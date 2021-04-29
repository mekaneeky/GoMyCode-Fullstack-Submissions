import React, {useState, useEffect} from 'react';
import {Col, Card} from 'react-bootstrap';

function User(props) {

    return(
        <Col xs="4" lg="4">
            <Card>
                
                
                
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    {props.email}
                    </Card.Text>
                    <Card.Text>
                    {props.address.city}
                    </Card.Text>

                    <h5><a href={"https://" +props.website }>Go to website</a></h5>

                </Card.Body>
            </Card>
        </Col>
    )

}

export default User;