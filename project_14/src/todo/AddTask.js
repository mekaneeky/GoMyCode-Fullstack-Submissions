import React, { useState } from 'react';
import { connect } from "react-redux";
import { addTodo } from '../redux/actions'

function AddTask(props) { 
    
    const [Text, setText] = useState("");

    function deal_with_change(text) {
        setText(text)
    }

    function submit_todo() {
        props.addTodo(Text);
        setText("");
    }

    return (
        <React.Fragment>
            <div className="form-check">
                <div>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                </div>
                <div >
                    <input type="text" onChange={ e => {deal_with_change(e.target.value) }} class="form-control" id="exampleFormControlInput1" />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => submit_todo()}>Add Todo</button>
                </div>
            </div>
        </React.Fragment>
    );
}


export default connect(
  null,
  { addTodo }
)(AddTask);