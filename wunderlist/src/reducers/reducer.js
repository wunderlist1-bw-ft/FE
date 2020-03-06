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
        default:
            return state
    }
}