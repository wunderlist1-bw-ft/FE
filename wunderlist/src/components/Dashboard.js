import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import TodoList from './list_components/TodoList'
import AddTask from './list_components/AddTask'
import UpdateTask from './list_components/UpdateTask'

import { fetchTasks } from '../actions'

const initialForm = {
    id: null,
    name: '',
    description: ''
}


const Dashboard = (props) => {
    //console.log('history', history)
    //console.log('tasks', tasks)
    const [tasks, setTasks] = useState(props.tasks)
    const [editing, setEditing] = useState(false)
    const [taskToUpdate, setTaskToUpdate] = useState(initialForm)

    const editTask = task => {
        setEditing(true)
        setTaskToUpdate({ id: task.id, name: task.name, description: task.description})
    }
    
    const updateTask = (id, updatedTask) => {
        setEditing(false)

        setTasks(props.tasks.map(task => (task.id === id ? updatedTask : task)))
    }
    
    //const [query, setQuery] = useState('');

    // const taskToUpdate = props.tasks.map(task => {
    //     if (task.id === null) {
    //     setCurrentTask({
    //         id: task.id,
    //         name: task.name,
    //         description: task.description
    //     })
    //     } else return task
    // })

    useEffect(() => {
        props.fetchTasks();

    }, [])

    

    return (
        <div className='dashboard'>
            <h1>Welcome to your Wunderlist</h1>
            <div className='task-container'>
            {editing ? (
                <div>
                    <h2>Edit Task</h2>
                    <UpdateTask 
                    editing={editing}
                    setEditing={setEditing}
                    taskToUpdate={taskToUpdate}
                    setTaskToUpdate={setTaskToUpdate}
                    updateTask={updateTask}
                    />
                </div>
            ) : (
                <div>
                    <h2>Add Task</h2>
                    <AddTask />
                </div> 
                )}
                <div className='dashboard-right'>
                    <h2>Current Tasks</h2>
                    <TodoList editTask={editTask}/>
                </div>
            </div>
        </div>


            )}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        isLoading: state.isLoading,
        error: state.error,
        isEditing: state.isEditing
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