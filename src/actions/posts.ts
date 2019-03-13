const actions = {
  FETCHING_POSTS: 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS: 'FETCH_POST_SUCCESSS',
  FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
};

export default actions;

export const fetchPostsForSubreddit = (subreddit: string) => async (dispatch: Function) => {
  dispatch({ type: actions.FETCHING_POSTS });
  try {
    const rawResponse: any = await fetch(`https://reddit.com/r/${subreddit}.json`);
    const parsedResponse = await rawResponse.json();
    const posts = parsedResponse.data.children.map(({ data }: any) => data);
    dispatch({
      type: actions.FETCH_POSTS_SUCCESS,
      payload: posts,
    });
  } catch (error) {
    dispatch({
      error,
      type: actions.FETCH_POSTS_ERROR,
    });
  }
};
