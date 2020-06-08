const initialState = {
    token : null
}

export function authorizationUser(state = initialState, action) {
    switch (action.type) {

        case 'AUTH_SUCCESS' :
            return { ...state, data: action.payload }

        case 'AUTH_DENIED' :
            return { ...state, data: action.payload }
        
        default:
            return state;
    }
}