const initialState = {
    isLoading: false,
    error: '',
    lists: [],
    tasks: [],
}


export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_LISTS':
            return {
                ...state,
                isLoading: true
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
                isLoading: true
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
        default:
            return state
    }
}


