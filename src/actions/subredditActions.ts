import { searchSubreddits } from '../services/redditService';

const actions = {
  FETCHING_SUBREDDIT_SEARCH_RESULTS: 'FETCHING_SUBREDDIT_SEARCH_RESULTS',
  FETCH_SUBREDDIT_SEARCH_SUCCESS: 'FETCH_SUBREDDIT_SEARCH_SUCCESS',
  FETCH_SUBREDDIT_SEARCH_ERROR: 'FETCH_SUBREDDIT_SEARCH_ERROR',
};

export default actions;

export const searchForSubreddits = (query: string) => async (dispatch: Function) => {
  dispatch({ type: actions.FETCHING_SUBREDDIT_SEARCH_RESULTS });
  try {
    const results = await searchSubreddits(query);
    dispatch({
      type: actions.FETCH_SUBREDDIT_SEARCH_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      error,
      type: actions.FETCH_SUBREDDIT_SEARCH_SUCCESS,
    });
  }
};
