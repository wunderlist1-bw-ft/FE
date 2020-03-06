import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {  taskUpdate } from '../../actions'


// const initialForm = {
//     id: null,
//     name: '',
//     description: ''
// }

const UpdateTask = props => {
    console.log(props)
    const [input, setInput] = useState({ id: props.taskToUpdate.id, name: props.taskToUpdate.name, description: props.taskToUpdate.description})

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateTask(input.id, input)
        props.taskUpdate(input)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
            type='text'
            name='name'
            value={input.name}
            onChange={handleChange}
            />
            <label>description</label>
            <input
            type='text'
            name='description'
            value={input.description}
            onChange={handleChange}
            />
            <button >Update Task</button>
            <button onClick={() => props.isEditing(false)} className='update-button'>Cancel</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isEditing: state.isEditing,
        tasks: state.tasks
    }
}

export default connect(
    mapStateToProps,
    { taskUpdate }
    )(UpdateTask)