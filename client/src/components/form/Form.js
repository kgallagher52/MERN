import { useState, useContext, useEffect } from 'react'
import { TextField, Typography, Button, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import GlobalContext from '../../context/GlobalContext'
import useStyles from './styles'

// GET THE CURRENT ID OF POST

const Form = () => {
    const { createPost, dispatch, currentId, setCurrentId, updatePost, posts } = useContext(GlobalContext);
    const post = currentId && posts.find((p) => p._id === currentId)
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        tags: '',
        message: '',
        selectedFile: ''
    });

    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
        return () => {
            setPostData({
                creator: '',
                title: '',
                tags: '',
                message: '',
                selectedFile: ''
            })
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(dispatch, currentId, postData))
        } else {
            createPost(dispatch, postData);
        }

    }

    const clear = () => {
        setPostData({
            creator: '',
            title: '',
            tags: '',
            message: '',
            selectedFile: ''
        })
        setCurrentId(null);
    }

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Updating a Memory" : "Creating a Memory"}</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form
