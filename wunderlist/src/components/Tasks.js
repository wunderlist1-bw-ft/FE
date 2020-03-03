import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTasks } from '../actions'

const Tasks = props => {
    //console.log('task.js props', props)

    useEffect(() => {
        props.fetchTasks()

    }, [])

    return (
        <div>
            Testing Tasks
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
    { fetchTasks }
    )(Tasks);
