import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTask } from '../../actions'

const AddTask = props => {
    const [input, setInput] = useState({id: null, name: '', description: ''})

    const handleSubmit = e => {
        e.preventDefault()
        props.addTask(input)
        console.log(props.tasks)
    }

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
   
    return (
        <form onSubmit={handleSubmit} className='add-task'>
            <label>Name</label><br />
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
            <button className='add-button'>Add Task</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(
    mapStateToProps,
    { addTask }
)(AddTask)