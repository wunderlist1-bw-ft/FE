import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/index'

const List = props => {
   // console.log('list.js props', props)

    useEffect(() => { 
        props.fetchTasks()
    },[])

    const mapped = props.tasks.map(task => {
        if (task.todo_list_Id === props.list.id) {
           return <ul key={task.id}><li>{task.name}</li></ul>
        }
    })

    return (
        <div className='todo-list'>
           <p>{props.list.name}</p>
           {mapped}
           
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