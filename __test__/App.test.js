import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../src/components/App';

describe('App component', () => {
  it('should render correctly in mode', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
