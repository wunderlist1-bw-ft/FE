import { axiosWithAuth } from '../utils/axiosWithAuth'

export const fetchTasks = () => dispatch => {
    dispatch({ type: 'FETCHING_TASKS' })
        axiosWithAuth()
            .get('/api/auth/tasks')
            .then(res => {
                console.log(res)
                dispatch({ type: 'SET_TASKS', payload: res.data })
            })
            .catch(err => {
                //console.log('error fetching lists', err)
                dispatch({ type: 'TASKS_ERROR', payload: 'Error fetching tasks' })
            })
}

export const addTask = task => {
    return { type: 'ADD_TASK', payload: task }
}

export const deleteTask = id => {
    return { type: 'DELETE_TASK', payload: id }
}