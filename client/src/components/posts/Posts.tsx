import React from 'react'
import { useSelector } from 'react-redux'
import Post from './post/Post'
import useStyles from './styles'

const Posts = () => {
    const posts = useSelector((state) => state)
    const classes = useStyles();
    console.log(posts);
    return (
        <>
            <h1> Posts </h1>
            <Post />
            <Post />
            <Post />
        </>
    )
}

export default Posts
