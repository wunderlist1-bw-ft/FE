import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import TodoList from './list_components/TodoList'

import { fetchTasks, fetchLists, clearCompleted } from '../actions'

const Dashboard = (props) => {
    //console.log('history', history)
    //console.log('tasks', tasks)
    //const [query, setQuery] = useState('');

    useEffect(() => {
        props.fetchLists();
        props.fetchTasks();

    }, [])

    const handleAdd = e => {
        e.preventDefault();
        props.history.push('/add-list')
    }

    function clearCompleted(event) {
        //console.log(e)
        event.preventDefault();
        clearCompleted(props.tasks)
    }


    return (
        <div className='dashboard'>
                {/* <TodoList history={history} query={setQuery}/> */}
                
                <TodoList history={props.history} />
                <button onClick={handleAdd}>Add a New List</button>
                <button onClick={clearCompleted}>Clear Completed Items</button>
            {/* <Search setQuery={setQuery} /> */}
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
    {fetchLists, fetchTasks, clearCompleted }
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