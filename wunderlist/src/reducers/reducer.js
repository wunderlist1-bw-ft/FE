const initialState = {
    isLoading: false,
    lists: [],
    tasks: [],
}

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state
            }
        case 'LOGIN_ERROR':
            return {
                ...state
            }
        case 'ADD_TODO':
            return {
                ...state
            }
        case 'REMOVE_TODO':
            return {
                ...state
            }
        case 'TOGGLE_TODO':
            return {
                ...state
            }
        default:
            return state
    }
}


