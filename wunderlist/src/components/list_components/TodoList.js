import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const TodoList = props => {
    //console.log(props)

    return (
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {props.tasks.length > 0 ? (
                    props.tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td>
                                <button className='table-button'>Edit Task</button>
                                <button className='table-button'>Delete Task</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>You've done it all!</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(
    mapStateToProps,
    {}
    )(TodoList)