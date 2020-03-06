import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { toggleComplete, deleteTask, editTask } from '../../actions'


const Tasks = props => {
    //console.log('tasks.js props', props)
    const [editing, setEditing] = useState(false)

    const [input, setInput] = useState({ 
        name: '', 
        description: ''
         })

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post(`https://wunderlistdb.herokuapp.com/api/auth/tasks/${props.task.id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
       // props.editTask(props.task.id)
    }

    const handleChange = e => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <ul key={props.task.id} className='task-list'>
                <li className= {props.task.completed ? 'task-complete' : 'task'}>
                    {props.task.name}
                    <input type='checkbox' 
                    checked={props.task.completed}
                    onChange={() => props.toggleComplete(props.task.id)}/>
                    <i className="far fa-edit" onClick={() => setEditing(true)}></i>
                    <i className="fas fa-times"
                    onClick={() => props.deleteTask(props.task.id)}></i>
                </li>
            </ul>
            {editing && (
                <form onSubmit={handleSubmit}>
                    <label>
                        name
                        <input
                        type='text'
                        name='name'
                        value={input.name}
                        placeholder={props.task.name}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        description
                        <input
                        type='text'
                        name='description'
                        value={input.description}
                        placeholder={props.task.description}
                        onChange={handleChange}
                        />
                    </label>
                    <button type='submit'>Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </form>
            )}
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
    { toggleComplete, deleteTask, editTask }
)(Tasks)