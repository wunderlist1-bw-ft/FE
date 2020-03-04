import { axiosWithAuth } from '../utils/axiosWithAuth'

export const fetchLists = () => dispatch => {
    dispatch({ type: 'FETCHING_LISTS'})
        axiosWithAuth()
            .get('/api/auth/todos/all')
            .then(res => {
                //console.log(res.data)
                dispatch({ type: 'SET_LISTS', payload: res.data })
            })
            .catch(err => {
                //console.log('error fetching lists', err)
                dispatch({ type: 'LISTS_ERROR', payload: 'Error fetching lists' })
            })
}

export const fetchTasks = () => dispatch => {
    dispatch({ type: 'FETCHING_TASKS' })
        axiosWithAuth()
            .get('/api/auth/tasks')
            .then(res => {
                //console.log(res.data)
                dispatch({ type: 'SET_TASKS', payload: res.data })
            })
            .catch(err => {
                //console.log('error fetching lists', err)
                dispatch({ type: 'TASKS_ERROR', payload: 'Error fetching tasks' })
            })
}

export const toggleComplete = id => {
    return { type: 'TOGGLE_TODO', payload: id }
}

export const deleteTask = id => dispatch => {
    dispatch({ type: 'DELETE_TASK_START' })
        axiosWithAuth()
            .delete(`/api/auth/tasks/${id}`)
            .then(res => {
                console.log(res)
                dispatch({ type: 'DELETE_TASK_SUCCESS', payload: res.data })
            })
            .catch(err => {
                //console.log('error deleting task', err)
                dispatch({ type: 'ERROR_DELETING_TASK', payload: 'Error deleting task' })
            })

}

export const addList = listInput => dispatch => {
    dispatch({ type: 'ADDING_LIST' })
        axiosWithAuth()
            .post('/api/auth/todos/add', listInput)
            .then(res => {
                console.log(res)
                dispatch({ type: 'ADDING_LIST_SUCCESS', payload: res.data})
            })
            .catch(err => {
                dispatch({ type: 'ERROR_ADDING_LIST', payload: 'Error adding list' })
            })
}