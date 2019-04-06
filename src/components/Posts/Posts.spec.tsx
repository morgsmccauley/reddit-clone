import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Posts from './Posts';

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

describe('Posts', () => {
  it('renders all posts', () => {
    const wrapper = shallow(<Posts posts={posts} />);
    const reneredPosts = wrapper.dive().find('Post');
    expect(reneredPosts.get(0).props.post).to.equal(posts[0]);
    expect(reneredPosts.get(1).props.post).to.equal(posts[1]);
    expect(reneredPosts).to.have.length(posts.length);
  });
});
