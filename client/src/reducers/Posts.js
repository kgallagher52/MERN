const initialState = []

export default (posts = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE_ALL':

            return [...posts, action.payload]

        default:
            return posts;
    }
}
