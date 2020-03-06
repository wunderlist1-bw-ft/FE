const initialState = {
    isLoading: false,
    error: '',
    tasks: [{
        id: '',
        name: '',
        description: '',
        start_Date: '',
        end_date: '',
        completed: false,
        todo_list_Id: ''
    }]
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
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
        case 'ADD_TASK':
            const newTask = {
                id: state.tasks.length + 1,
                name: action.payload.name,
                description: action.payload.description,
                start_Date: null,
                end_date: null,
                completed: false,
                todo_list_Id: null
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
}