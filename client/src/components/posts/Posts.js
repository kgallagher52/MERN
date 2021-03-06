import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import Post from './post/Post'
import { Grid, CircularProgress } from '@material-ui/core'
import useStyles from './styles'

const Posts = () => {
    const { posts } = useContext(GlobalContext);
    const classes = useStyles();
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    posts.map((p) => (
                        <Grid key={p._id} item xs={12} sm={6}>
                            <Post post={p} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts
