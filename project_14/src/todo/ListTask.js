import React from 'react';
import Task from "./Task";
import AddTask from './AddTask';
import { connect } from "react-redux";

function ListTask(props) {

    let tasks_lists_tags = [];

    
    for(let task_idx in props.tasks) {
        if (props.tasks[task_idx].name.toLowerCase().includes(props.filterText.toLowerCase()) || props.filterText === "") {
            tasks_lists_tags.push(<Task task_id={task_idx} checked={props.tasks[task_idx].checked} task_name={props.tasks[task_idx].name} />)
        }
    }

    tasks_lists_tags.push(
        <AddTask />
    );

    console.log(props.tasks)
    

    return tasks_lists_tags;
}

const mapStateToProps = (state) => ({ tasks: state.tasks, filterText: state.filter_text })

export default connect(mapStateToProps, null)(ListTask)