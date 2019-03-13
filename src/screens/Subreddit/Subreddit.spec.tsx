import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('Text').map(el => el.render().text());
    expect(text).to.deep.equal([
      'Welcome to React Native!',
      'To get started, edit App.js',
      'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
    ]);
  });
});
