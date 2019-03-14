import PostsActions from '../actions/postsActions';

interface State {
  isFetching: boolean;
  data?: [];
  error?: string;
}

interface Action {
  type: string;
  payload: [];
  error: string;
}

const initialState: State = {
  isFetching: false,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case PostsActions.FETCHING_POSTS:
      return {
        isFetching: true,
      };
    case PostsActions.FETCH_POSTS_SUCCESS:
      return {
        isFetching: false,
        data: action.payload,
      };
    case PostsActions.FETCH_POSTS_ERROR:
      return {
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
