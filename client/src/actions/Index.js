import * as api from '../api/Index' // * means import everything from api


export const getPosts = async (dispatch, posts) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "FETCH_ALL", payload: { ...posts, posts: data } })
    } catch (err) {
        console.log(err.message)
    }
}

export const createPost = async (dispatch, post) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data })
    } catch (err) {
        console.log(err.message)
    }
}

export const updatePost = async (dispatch, id, post) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE', payload: data })
    } catch (err) {
        console.log(err.message)
    }
}

