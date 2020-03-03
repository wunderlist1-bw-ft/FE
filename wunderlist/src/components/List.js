import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/index'

import Tasks from './Tasks'

const List = props => {
   // console.log('list.js props', props)

    useEffect(() => { 
        props.fetchTasks()
    },[])


    return (
        <div className='todo-list'>
           <h3>{props.list.name}</h3>
           {props.tasks.map(task => task.todo_list_Id === props.list.id && <Tasks key={task.id} task={task}/>)}
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
    { fetchTasks }
    )(List)