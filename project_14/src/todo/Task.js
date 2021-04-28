import {React, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { changeTodo } from '../redux/actions';

function Task(props) {

    const history = useHistory();
    const { totalTasks } = useSelector( (state) => {return {totalTasks:state.tasks}} )

    function navigate(url_to_go_to, tasks = totalTasks) {
        history.push(url_to_go_to, {tasks:tasks} )
    }

    function deal_with_checked_change(checked){
        props.changeTodo(props.task_id, props.task_name, checked)
    }

    if (props.checked) {
        console.log(props)
        return (
            <div className="form-check">
                <input className="form-check-input" onChange={(e) => {deal_with_checked_change(e.target.checked)}} type="checkbox" value="" id="flexCheckDefault" checked/>
                <label className="form-check-label" for="flexCheckDefault">
                    <h1><a onClick={() => navigate("/tasks/" + props.task_id)}>{props.task_name}</a></h1>
                </label>
            </div>
        )
    } else {
        return (
            <div className="form-check">
                <input className="form-check-input" onChange={(e) => {deal_with_checked_change(e.target.checked)}} type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    <h1><a onClick={() => navigate("/tasks/" + props.task_id)} >{props.task_name}</a></h1>
                </label>
            </div>
        )
    }
}

export default connect(null, {changeTodo})(Task);