
export const PostReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...state, action.payload]
        case 'UPDATE':
            return { posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post) }
        default:
            return state;
    }
}