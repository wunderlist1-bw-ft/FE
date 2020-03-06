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
    const [input, setInput] = useState(props.taskToUpdate)

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        props.setTaskToUpdate({...input, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateTask(input.id, input)
        props.taskUpdate(props.taskToUpdate)
    }

    return (
        <form onSubmit={handleSubmit} className='update-task'>
            <label>Name</label>
            <input
            type='text'
            name='name'
            value={input.name}
            onChange={handleChange}
            /><br />
            <label>Description</label>
            <textarea
            name='description'
            value={input.description}
            onChange={handleChange}
            /><br />
            <button className='update-button'>Update Task</button><br />
            <button onClick={() => props.setEditing(false)} className='cancel-button'>Cancel</button>
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