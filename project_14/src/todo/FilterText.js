import React, {useState} from 'react';
import { connect } from "react-redux";
import { changeFilter } from '../redux/actions.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';

function Filter(props) {

    const [Text, setText] = useState("");

    function handleChange(text) {
        setText(text)
    }

    function filterByChange() {
        props.changeFilter(Text)
    }

    return (
        <Row>
            <Form>
                <div className="searchbar">
                    <Form.Control id="filter-bar" type="text" placeholder="Filter Tasks" 
                    onKeyUp={ (e) => handleChange(e.target.value)} />
                    <Button onClick={() => filterByChange() }>Search</Button>
                </div>
            </Form>
        </Row>
        );
    
}

const mapStateToProps = (state) => ({filterText: state.filter_text})
export default connect(mapStateToProps, { changeFilter } )(Filter);