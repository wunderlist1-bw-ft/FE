import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const Tasks = props => {

    useEffect(() => {
        axios
            .get('https://wunderlistdb.herokuapp.com/api/auth/tasks')
            .then(res => {
                console.log('tasks', res.data)
            })
            .catch(err => console.log('error fetching tasks', err))
    }, [])

    return (
        <div>
            Testing Tasks
        </div>
    )
}

const mapStateToProps = ({ state }) => {
    return { state }
}

export default connect(
    mapStateToProps, 
    {}
    )(Tasks);
