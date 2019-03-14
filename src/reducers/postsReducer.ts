import PostsActions from '../actions/postsActions';

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
