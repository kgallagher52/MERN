
export const PostReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE_ALL':
            return [...state, action.payload]
        default:
            return state;
    }
}