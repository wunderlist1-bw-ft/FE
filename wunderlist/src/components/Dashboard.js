import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import TodoList from './list_components/TodoList'
import Search from "./Search";

import TodoList from './list_components/TodoList'

import { fetchTasks, fetchLists, clearCompleted } from '../actions'

const Dashboard = ({ fetchLists, fetchTasks, tasks, history, state }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetchLists();
        fetchTasks();

    }, [fetchLists, fetchTasks])

    const handleAdd = e => {
        e.preventDefault();
        history.push('/add-list')
    }

    const clearCompleted = e => {
        e.preventDefault();
        clearCompleted(tasks.completed)
    }


    return (
        <div className='dashboard'>
                <TodoList />
                <button onClick={handleAdd}>Add a New List</button>
                <button onClick={clearCompleted}>Clear Completed Items</button>
            <Search setQuery={setQuery} />
            <TodoList query={query} />
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