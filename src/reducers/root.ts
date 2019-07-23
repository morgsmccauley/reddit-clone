import { combineReducers } from 'redux';

import posts from './postsReducer';
import subreddit from './subredditReducer';

export default combineReducers({
  posts,
  subreddit,
});
