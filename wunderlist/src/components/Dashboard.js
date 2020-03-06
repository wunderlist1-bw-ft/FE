import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import TodoList from './list_components/TodoList'

import { fetchTasks } from '../actions'

const Dashboard = (props) => {
    //console.log('history', history)
    //console.log('tasks', tasks)
    //const [query, setQuery] = useState('');

    useEffect(() => {
        props.fetchTasks();

    }, [])

    return (
        <div className='dashboard'>
                <TodoList />
            {/* <Search setQuery={setQuery} /> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchTasks }
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