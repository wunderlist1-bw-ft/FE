import React from 'react'
import { connect } from 'react-redux'

import Tasks from './Tasks'

const List = props => {
   // console.log('list.js props', props)

    return (
        <div className='todo-list'>
           <strong>{props.list.name}</strong>
           <i className="fas fa-times" onClick={() => console.log('delete list clicked')}></i>
           <i className="far fa-edit" onClick={() => console.log('edit list clicked')}></i>
           {props.tasks.map(task => task.todo_list_Id === props.list.id && <Tasks key={task.id} task={task}/>)}
        <button>Add a new task</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        lists: state.lists,
        tasks: state.tasks,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {}
    )(List)