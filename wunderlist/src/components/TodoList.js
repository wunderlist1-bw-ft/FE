import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchLists } from '../actions'

import List from './List'


const TodoList = props => {
    console.log('todolist.js props', props)

    useEffect(() => {
        props.fetchLists();
    }, [])

    return (
        <div className='list-container'>
           {props.lists.map(list => (
               <List key={list.id} list={list} />
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
    { fetchLists }
    )(TodoList);