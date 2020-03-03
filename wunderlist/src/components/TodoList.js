import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchLists } from '../actions'


const TodoList = props => {
    //console.log('todolist props', props)

    useEffect(() => {
        props.fetchLists();
    }, [])

    return (
        <div>
            Hello
            {console.log(props)}
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
    { fetchLists }
    )(TodoList);