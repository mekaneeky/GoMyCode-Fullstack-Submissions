import React, {useState, useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';
import User from './User'

function UserList(props) {

    let list_of_users = props.listOfUsers.map(
        (user) => {
            return(<User name={user.name} website={user.website}
                email={user.email} address={user.address}></User>)
        }
    )

    return(
        <Container>
            <Row>
                {list_of_users}
            </Row>
        </Container>
    )

}

export default UserList;