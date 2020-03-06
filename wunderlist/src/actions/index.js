import { axiosWithAuth } from '../utils/axiosWithAuth'

export const fetchLists = () => dispatch => {
    dispatch({ type: 'FETCHING_LISTS'})
        axiosWithAuth()
            .get('https://wunderlistdb.herokuapp.com/api/auth/todos/all')
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
            .get('https://wunderlistdb.herokuapp.com/api/auth/tasks')
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
    return { type: 'TOGGLE_TASK', payload: id }
}

export const clearCompleted = () => {
    return { type: 'CLEAR_COMPLETED' }
}

export const editTask = task => dispatch => {
    dispatch({ type: 'EDIT_TASK_START' })
        axiosWithAuth()
            .post(`https://wunderlistdb.herokuapp.com/api/auth/todos/${task.id}`, task)
            .then(res => {
                console.log(res)
                dispatch({ type: 'EDIT_TASK_SUCCESS', payload: res.data })
            })
            .catch(err => {
                console.log('Error editing task', err)
                dispatch({ type: 'EDIT_TASK_ERROR', payload: 'Error editing task' })
            })
}

export const addTask = taskInput => dispatch => {
    dispatch({ type: 'ADD_TASK_START' })
    axiosWithAuth()
        .post('https://wunderlistdb.herokuapp.com/api/auth/tasks/add', taskInput)
        .then(res => {
            console.log('add task', res)
            dispatch({ type: 'ADD_TASK_SUCCESS', payload: res.data })
        })
        .catch(err => {
            console.log('Error adding task', err)
            dispatch({ type: 'ADD_TASK_ERROR', payload: 'Error adding task' })
        })
}

export const addList = listInput => dispatch => {
    dispatch({ type: 'ADDING_LIST' })
        axiosWithAuth()
            .post('https://wunderlistdb.herokuapp.com/api/auth/todos/add', listInput)
            .then(res => {
                console.log(res, res.data)
                dispatch({ type: 'ADDING_LIST_SUCCESS', payload: res.data})
            })
            .catch(err => {
                dispatch({ type: 'ERROR_ADDING_LIST', payload: 'Error adding list' })
            })
}

export const deleteTask = id => dispatch => {
    dispatch({ type: 'DELETE_TASK_START' })
        axiosWithAuth()
            .delete(`https://wunderlistdb.herokuapp.com/api/auth/tasks/${id}`)
            .then(res => {
                console.log(res)
                dispatch({ type: 'DELETE_TASK_SUCCESS', payload: res.data })
                window.location.reload();
            })
            .catch(err => {
                //console.log('error deleting task', err)
                dispatch({ type: 'ERROR_DELETING_TASK', payload: 'Error deleting task' })
            })
}

export const deleteList = id => dispatch => {
    dispatch({ type: 'DELETE_LIST_START' })
        axiosWithAuth()
            .delete(`https://wunderlistdb.herokuapp.com/api/auth/todos/${id}`)
            .then(res => {
                console.log(res)
                dispatch({ type: 'DELETE_LIST_SUCCESS', payload: res.data })
                window.location.reload();
            })
            .catch(err => {
                console.log('error deleting list', err)
                dispatch({ type: 'ERROR_DELETING_LIST', payload: 'Error deleting list' })
            })
}



