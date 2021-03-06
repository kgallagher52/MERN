import axios from 'axios'
import { Post } from '../globalTypes'
const url = "http://localhost:8080/posts"

export const fetchPosts = () => { return axios.get(url); }

export const createPost = (newPost: Post) => axios.post(url, newPost)
