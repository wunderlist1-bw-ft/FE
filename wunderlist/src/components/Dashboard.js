import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const TodoListContext = createContext();

const Dashboard = () => {
    const [todoList, setTodoList] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios   
            .get('https://wunderlistdb.herokuapp.com/api/auth/todos/all')
            .then(res => {
                console.log('list data', res.data)
                setTodoList(res.data)
            })
            .catch(err => console.log('error fetching lists', err))

        axios
            .get('https://wunderlistdb.herokuapp.com/api/auth/tasks')
            .then(res => {
                console.log('tasks', res.data)
                setTasks(res.data)
            })
            .catch(err => console.log('error fetching tasks', err))
    }, [])

    return (
        <div className='dashboard'>
            <TodoListContext.Provider list={todoList} tasks={tasks}>
            Testing
            </TodoListContext.Provider>
        </div>
    )
}

export default Dashboard;


//Dashboard will render:
//  TodoList(s) - each set of lists
//  each TodoList will have it's own set of tasks
//      each TodoList title will have a delete & edit button (edit list title or delete list)
//  each task will have an edit/delete icon to edit task
//  
//  AddTodo form
//