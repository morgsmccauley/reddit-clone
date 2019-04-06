import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { SubredditUnconnected as Subreddit } from './Subreddit';

const posts = [
  {
    title: 'post 1',
    id: 'id 1',
    author: 'author 1',
    totalComments: 1,
    score: 1,
  },
  {
    title: 'post 2',
    id: 'id 2',
    author: 'author 2',
    totalComments: 2,
    score: 2,
  },
];

describe('Subreddit', () => {
  it('renders loading', () => {
    const wrapper = shallow(<Subreddit posts={[]} isFetching={true} />);
    const text = wrapper.find('Text').render().text();
    expect(text).to.equal('Loading...');
  });

  it('renders posts', () => {
    const wrapper = shallow(<Subreddit posts={posts} isFetching={false} />);
    const postsComponent = wrapper.find('Posts');
    expect(postsComponent.prop('posts')).to.equal(posts);
  });

  it('fetches posts on mount', () => {
    // unable to test react hooks in enzyme
  });
});
