import * as api from '../api' // * means import everything from api

// Action Creators - are functions that return actions

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (err) {
        console.log(err.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data })
    } catch (err) {
        console.log(err.message)
    }
}
