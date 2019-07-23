import { fetchPosts } from '../services/redditService';

const actions = {
  FETCHING_POSTS: 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS: 'FETCH_POST_SUCCESSS',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
};

export default actions;

export const fetchPostsForSubreddit = (subreddit: string) => async (dispatch: Function) => {
  dispatch({ type: actions.FETCHING_POSTS });
  try {
    const results = await fetchPosts(subreddit);
    dispatch({
      type: actions.FETCH_POSTS_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      error,
      type: actions.FETCH_POSTS_ERROR,
    });
  }
};
