import React from 'react'
import { connect } from 'react-redux'
import { toggleComplete, deleteTask } from '../../actions'


const Tasks = props => {
    //console.log('tasks.js props', props)

    return (
        <div>
            <ul key={props.task.id} className='task-list'>
                <li className= {props.task.completed ? 'task-complete' : 'task'}>
                    {props.task.name}
                    <input type='checkbox' 
                    checked={props.task.completed}
                    onChange={() => props.toggleComplete(props.task.id)}/>
                    <i className="far fa-edit"></i>
                    <i className="fas fa-times"
                    onClick={() => props.deleteTask(props.task.id)}></i>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        lists: state.lists,
        isLoading: state.isLoading,
        error: state.error
     }
}

export default connect(
    mapStateToProps,
    { toggleComplete, deleteTask }
)(Tasks)