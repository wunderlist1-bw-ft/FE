import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TodoList from './list_components/TodoList'

import { fetchTasks } from '../actions/index'
import { fetchLists } from '../actions'




const Dashboard = ({ fetchLists, fetchTasks }) => {

    useEffect(() => {
        fetchLists();
        fetchTasks()
    }, [fetchLists, fetchTasks])

    return (
        <div className='dashboard'>
                <TodoList />
                <button>Add a New List</button>
                <button>Clear Completed Items</button>
        </div>
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
    {fetchLists, fetchTasks}
    )(Dashboard)


//Dashboard will render:
//
//  TodoList(s) - each set of lists
//  each TodoList will have it's own set of tasks
//      each TodoList title will have a delete & edit button (edit list title or delete list)
//  each task will have an edit/delete icon to edit task
//  
//  Button to add a new list
//