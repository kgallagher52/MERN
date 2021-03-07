import { useState, useEffect, useReducer } from 'react';
import GlobalContext from './context/GlobalContext'
import { getPosts, createPost, updatePost, deletePost, likePost } from './actions/Index'
import { PostReducer } from './reducers/Index'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './components/posts/Posts'
import Form from './components/form/Form'
import useStyles from './styles'

const initialState = { posts: [] };

const App = () => {
  const [state, dispatch] = useReducer(PostReducer, initialState);
  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();

  const { posts } = state;
  useEffect(() => {
    dispatch(getPosts(dispatch, posts));
    // eslint-disable-next-line  
  }, [dispatch])

  return (
    <GlobalContext.Provider
      value={{
        posts,
        createPost,
        dispatch,
        currentId,
        setCurrentId,
        updatePost,
        deletePost,
        likePost
      }}
    >
      {console.log(posts)}

      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit" >
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="memories" height="60" />
        </AppBar>
        <Grow in>
          <Container >
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </GlobalContext.Provider>
  );
}

export default App;
