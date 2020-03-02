const initialState = {
    isAuthenticated: false,
    isLoading: false,
    tasks: [
        { 
            name: "clean dishes", 
            description: "new soap", 
            todo_list_Id: 1 
        },
        { 
            name: "walk dog", 
            description: "avoid 7th st", 
            todo_list_Id: 1 
        }],
    todoLists: [
        { 
            id: 1, 
            name: "daily stuff", 
            User_id: 1 
        },
        { 
            id: 2, 
            name: "shopping list", 
            User_id: 1 
        }],
}

export const reducer = (state = initialState, action) => {
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


