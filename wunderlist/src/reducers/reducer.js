const initialState = {
    isLoading: false,
    error: '',
    lists: [],
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
                lists: []
            }
        case 'SET_LISTS':
            return {
                ...state,
                isLoading: false,
                lists: action.payload
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
                tasks: []
            }
        case 'SET_TASKS':
            return {
                ...state,
                tasks: action.payload
            }
        case 'TASKS_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'TOGGLE_TODO':
            const toggledTodo = state.tasks.map(task => {
                if (task.id === action.payload) {
                    return {...task, completed: !task.completed}
                } else return task
            })
            return {
                ...state,
                tasks: toggledTodo
            }
        default:
            return state
    }
}


