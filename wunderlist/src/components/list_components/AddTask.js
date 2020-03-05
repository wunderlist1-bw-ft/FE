import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../actions'

const AddTask = props => {
    const [taskInput, setTaskInput] = useState({
        id: '',
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
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addTask(taskInput)
        props.history.push('/dashboard')
    }

    return (
        <form onSubmit={handleSubmit}>
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
            
        </form>
    )
}

export default AddTask