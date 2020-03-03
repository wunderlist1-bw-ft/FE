import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'


const TodoList = props => {
    useEffect(() => {
        axios   
        .get('https://wunderlistdb.herokuapp.com/api/auth/todos/all')
        .then(res => {
            console.log('list data', res.data)
        })
        .catch(err => console.log('error fetching lists', err))
    }, [])

    return (
        <div>
            Hello
        </div>
    )
}
const mapStateToProps = ({ state }) => {
    return { state }
}

export default connect(
    mapStateToProps, 
    {}
    )(TodoList);