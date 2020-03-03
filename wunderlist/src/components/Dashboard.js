import React from 'react'
import TodoList from './TodoList'
import Tasks from './Tasks'



const Dashboard = props => {

    return (
        <div className='dashboard'>
                <TodoList />
                <Tasks />
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