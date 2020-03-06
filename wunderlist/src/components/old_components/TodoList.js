import React from 'react'
import { connect } from 'react-redux'
import { deleteList } from '../../actions'
import Tasks from './Tasks'



const TodoList = props => {
    console.log('todolist.js props', props)

    return (
        <div className='list-container'>
            {props.lists.map(list => (

                <div className='todo-list'>
            <strong>{list.name}</strong>
            <i className="fas fa-times" onClick={() => props.deleteList(props.list.id)}></i>
            <i className="far fa-edit" onClick={() => console.log('edit list clicked')}></i>

             {props.tasks.map(task => task.todo_list_Id === list.id && <Tasks key={task.id} task={task}/>)}
            <button onClick={() => props.history.push('/add-task')}>Add a new task</button>
        </div>
            ))}
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
    {deleteList}
)(TodoList);







// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'

// import { fetchLists } from '../actions'
// import { fetchTasks } from '../actions'

// const TodoList = props => {

//     useEffect(() => {
//         props.fetchLists();
//         props.fetchTasks();
//     }, [])

//     const individualTasks = props.tasks.map(task => task.todo_list_Id === props.list.id && <div>
//         <ul key={task.id}>
//             <li>
//                 {task.name}
//                 <input type='checkbox' />
//             </li>
//         </ul>
//     </div>)

//     return (
//         <div className='list-container'>
//            {props.lists.map(list => (
//                <div className='todo-list' key={list.id}>
//                    <p>{props.list.name}
//                    <button>Edit</button>
//                    <button>X</button>
//                    </p>
//                </div>
//            ))}
//         </div>
//     )}


//  const mapStateToProps = state => {
//     return {
//        tasks: state.tasks,
//        lists: state.lists,
//        isLoading: state.isLoading,
//        error: state.error
//     }
// }

// export default connect(
//     mapStateToProps, 
//     { fetchLists, fetchTasks }
//     )(TodoList);