import PostActions from '../actions/posts';

interface State {
  data: [];
  isFetching: boolean;
  error: string;
}

interface Action {
  type: string;
  payload: [];
  error: string;
}

const initialState: State = {
  data: [],
  isFetching: false,
  error: '',
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case PostActions.FETCHING_POSTS:
      return {
        isFetching: true,
      };
    case PostActions.FETCH_POSTS_SUCCESS:
      return {
        isFetching: false,
        data: action.payload,
      };
    case PostActions.FETCH_POSTS_ERROR:
      return {
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
