import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Post from './Post';

const post = {
  title: 'title',
  id: 'id',
  author: 'author',
  totalComments: 0,
  score: 0,
  image: undefined,
};

describe('Post', () => {
  it('renders image if present', () => {
    const postWithImage = {
      ...post,
      image: {
        url: 'url',
        width: 0,
        height: 0,
      },
    };
    const wrapper = shallow(<Post post={post} />);
    expect(wrapper.exists('Image')).to.be.false;
    wrapper.setProps({ post: postWithImage });
    expect(wrapper.exists('Image')).to.be.true;
  });
});
