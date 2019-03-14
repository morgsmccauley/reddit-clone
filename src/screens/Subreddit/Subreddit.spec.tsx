import React from 'react';
import { shallow } from 'enzyme';

import Subreddit from './Subreddit';

describe('App', () => {
  it('renders', () => {
    shallow(<Subreddit />);
  });
});
