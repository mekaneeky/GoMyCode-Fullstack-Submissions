import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Col} from 'react-bootstrap';


function MovieForm(props) {

    const [form_data, setForm] = useState({rating:3})
    
    let myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        setForm({
            movie_name:form_data["movie_name"],
            desc:form_data["desc"],
            photo:form_data["photo"],
            rating:form_data["rating"],
            [nam]:val
        });
        console.log(form_data)
      }

    
    
    return (
        <Col xs="6" lg="6">

            <Card>
                <Form>
                    <Form.Control name="photo" type="text" placeholder="Photo URL" onChange={myChangeHandler}/>
                        <Card.Body>
                            <Form.Control name="movie_name" type="text" placeholder="Movie Name" onChange={myChangeHandler}/>
                            <Card.Text>
                            <Form.Control as="textarea" name="desc" rows={3} placeholder="Movie Description" onChange={myChangeHandler}/>
                            </Card.Text>
                            <Form.Group controlId="formBasicRange">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control name="rating" type="range" min="0" max="5" onChange={myChangeHandler}/>
                            </Form.Group>
                            <Button variant="primary" type="" onClick={
                                
                                e =>{
                                    console.log(e.target)
                                    props.addMovie(form_data)
                                    }
                                }>Add New Movie</Button>
                        </Card.Body>
                </Form>
            </Card>
        </Col>

    )
}

export default MovieForm;