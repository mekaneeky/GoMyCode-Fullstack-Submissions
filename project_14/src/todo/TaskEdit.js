import React, { useState } from 'react';
import { connect, useSelector } from "react-redux";
import { changeTodo } from '../redux/actions'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
  } from "react-router-dom";


function TaskEdit(props) { 
    
    const { task_id } = useParams();
    console.log(task_id)
    const [Checked, setChecked] = useState(false);
    const {currentName, currentChecked} = useSelector( (state) => 
                                                        {
                                                            return {
                                                            currentName: state.tasks[task_id].name,
                                            currentChecked: state.tasks[task_id].checked
                                                            }
                                                        } )
    const { totalTasks } = useSelector( (state) => { return {totalTasks:state.tasks} } )

    console.log(currentName)
    const history = useHistory();                                                    
    const [Text, setText] = useState(currentName);

    function deal_with_text_change(text) {
        setText(text)
        }

    function deal_with_checked_change(checked){
        setChecked(checked)
    }

    function submit_todo() {
        props.changeTodo(task_id, Text, Checked);
        setText("");
        history.push("/", {tasks:totalTasks})
    }

    return (
        <React.Fragment>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={ e => {deal_with_checked_change(e.target.value) }} id="flexCheckDefault"/>
            </div>
            <div >
                <input type="text" value={Text} onChange={ e => {deal_with_text_change(e.target.value) }} class="form-control" id="exampleFormControlInput1" />
            </div>
            <div>
                <button className="btn btn-primary" onClick={() => submit_todo()}>Add Todo</button>
            </div>
        </React.Fragment>
    );
}


export default connect(
  null,
  { changeTodo }
)(TaskEdit);