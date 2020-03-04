import { axiosWithAuth } from '../utils/axiosWithAuth'

export const fetchLists = () => dispatch => {
    dispatch({ type: 'FETCHING_LISTS'})
        axiosWithAuth()
            .get('/api/auth/todos/all')
            .then(res => {
                //console.log(res.data)
                dispatch({ type: 'SET_LISTS', payload: res.data})
            })
            .catch(err => {
                console.log('error fetching lists', err)
                dispatch({ type: 'LISTS_ERROR', payload: 'Error fetching lists'})
            })
}

export const fetchTasks = () => dispatch => {
    dispatch({ type: 'FETCHING_TASKS' })
        axiosWithAuth()
            .get('/api/auth/tasks')
            .then(res => {
                //console.log(res.data)
                dispatch({ type: 'SET_TASKS', payload: res.data})
            })
            .catch(err => {
                console.log('error fetching lists', err)
                dispatch({ type: 'TASKS_ERROR', payload: 'Error fetching tasks'})
            })
}

export const toggleComplete = id => {
    console.log('toggleComplete in actions.js', id)
    return { type: 'TOGGLE_TODO', payload: id}
}