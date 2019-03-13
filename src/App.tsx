import React from 'react';
import { Provider } from 'react-redux';

import SubredditScreen from './screens/Subreddit/Subreddit';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SubredditScreen />
    </Provider>
  );
};

export default App;
