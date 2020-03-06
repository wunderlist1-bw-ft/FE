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
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
            type='text'
            name='name'
            value={input.name}
            onChange={handleChange}
            />
            <label>Description</label>
            <input
            type='text'
            name='description'
            value={input.description}
            onChange={handleChange}
            />
            <button>Add Task</button>
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