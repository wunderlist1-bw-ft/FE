import React from 'react'



const Tasks = props => {
    console.log('tasks.js props', props)

    return (
        <div>
            <ul key={props.task.id} className='task-list'>
                <li>
                    {props.task.name}
                    <input type='checkbox' />
                </li>
            </ul>
        </div>
    )
}

export default Tasks