import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../actions'

const AddTask = props => {
    //console.log('addtask', props)
    const [taskInput, setTaskInput] = useState({
        name: '',
        description: '',
        start_Date: '',
        end_date: '',
        completed: false,
        todo_list_Id: props.tasks.todo_list_Id
    })

    const handleChange = e => {
        e.preventDefault()
        setTaskInput({
            ...taskInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        console.log('taskInput', taskInput)
        e.preventDefault()
        props.addTask(taskInput)
        props.history.push('/dashboard')
    }

    return (
        <form>
            <label>
            name
             <input
            type='text'
            name='name'
            value={taskInput.name}
            onChange={handleChange}
            />
            </label>
            <label>
            description
            <input
            type='text'
            name='description'
            value={taskInput.description}
            onChange={handleChange}
            />
            </label>
            <label>
            start date
            <input
            type='text'
            name='start_Date'
            value={taskInput.start_Date}
            onChange={handleChange}
            />
            </label>
            <label>
            end date
            <input
            type='text'
            name='end_date'
            value={taskInput.end_date}
            onChange={handleChange}
            />
            </label>
            <label>
            list id
            <input
            type='text'
            name='todo_list_Id'
            value={props.tasks.todo_list_Id}
            onChange={handleChange}
            />
            </label>
            <button onClick={handleSubmit}>Add to the list</button>
        </form>
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
    { addTask }
)(AddTask)