import axios from "axios"

export const fetchLists = () => dispatch => {
    dispatch({ type: 'FETCHING_LISTS'})
        axios
            .get('https://wunderlistdb.herokuapp.com/api/auth/todos/all')
            .then(res => {
                console.log(res.data)
                dispatch({ type: 'SET_LISTS', payload: res.data})
            })
            .catch(err => {
                console.log('error fetching lists', err)
                dispatch({ type: 'LISTS_ERROR', payload: 'Error fetching lists'})
            })
}

export const fetchTasks = () => dispatch => {
    dispatch({ type: 'FETCHING_TASKS' })
        axios
            .get('https://wunderlistdb.herokuapp.com/api/auth/tasks')
            .then(res => {
                console.log(res.data)
                dispatch({ type: 'SET_TASKS', payload: res.data})
            })
            .catch(err => {
                console.log('error fetching lists', err)
                dispatch({ type: 'TASKS_ERROR', payload: 'Error fetching lists'})
            })
}