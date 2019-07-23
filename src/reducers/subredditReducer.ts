import subredditActions from '../actions/subredditActions';

interface State {
  isFetching: boolean;
  data: [];
  error?: string;
}

interface Action {
  type: string;
  payload: [];
  error: string;
}

const initialState: State = {
  isFetching: false,
  data: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case subredditActions.FETCHING_SUBREDDIT_SEARCH_RESULTS:
      return {
        isFetching: true,
        data: [],
      };
    case subredditActions.FETCH_SUBREDDIT_SEARCH_SUCCESS:
      return {
        isFetching: false,
        data: action.payload,
      };
    case subredditActions.FETCH_SUBREDDIT_SEARCH_ERROR:
      return {
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
