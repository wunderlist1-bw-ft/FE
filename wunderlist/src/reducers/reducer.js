const initialState = {
    isLoading: false,
    error: '',
    lists: [{
        id: '',
        name: '',
        completed: false,
        User_id: ''
    }],
    tasks: [{
        id: '',
        name: '',
        description: '',
        start_Date: '',
        end_date: '',
        completed: false,
        todo_list_Id: ''
    }],
}


export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_LISTS':
            return {
                ...state,
                isLoading: true,
                lists: [],
                error: ''
            }
        case 'SET_LISTS':
            return {
                ...state,
                isLoading: false,
                lists: action.payload,
                error: ''
            }
        case 'LISTS_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case 'FETCHING_TASKS':
            return {
                ...state,
                isLoading: true,
                tasks: [],
                error: ''
            }
        case 'SET_TASKS':
            return {
                ...state,
                isLoading: false,
                tasks: action.payload,
                error: ''
            }
        case 'TASKS_ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case 'TOGGLE_TODO':
            const toggledTodo = state.tasks.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task)
            return {
                ...state,
                tasks: toggledTodo,
                error: ''
            }
        case 'DELETE_TASK_START':
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case 'DELETE_TASK_SUCCESS':
            const deleteTask = state.tasks.filter(task => task.id !== action.payload && task)
            return {
                ...state,
                isLoading: false,
                tasks: deleteTask,
                error: ''
            }
        case 'ERROR_DELETING_TASK':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case 'ADDING_LIST':
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case 'ADDING_LIST_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                lists: [...state.lists, action.payload]
            }
        case 'ERROR_ADDING_LIST':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
