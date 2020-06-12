
export function userData(state = {}, action) {
    switch (action.type) {

    case 'USER_INFO_SUCCESS' :
        return { ...state, userInfo: action.payload }

    default:
        return state;
    }
}
