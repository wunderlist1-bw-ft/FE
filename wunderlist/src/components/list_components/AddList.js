import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addList } from '../../actions'

const AddList = props => {
    const [listInput, setListInput] = useState({ name: '', completed: false, User_id: 1 })

    const handleChange = e => {
        e.preventDefault()
        setListInput({
            ...listInput,
            name: e.target.value
        })
        console.log(listInput)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addList(listInput)
        props.history.push('/dashboard')
    }

    return (
        <form>
            <input
            className='new-list'
            type='text'
            name='name'
            placeholder='List Name'
            value={listInput.name}
            onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add New List</button>
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
    { addList }
)(AddList)