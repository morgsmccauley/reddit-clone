import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/root';

export default (preloadedState?: Object) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware));
