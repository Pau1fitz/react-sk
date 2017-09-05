import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

let wrapper;

beforeEach(() => {

  wrapper = shallow(
    <Message 
      message={"This is a message"}
      name={"Paul Fitzgerald"}
    />
  );

});

describe('<Message />', () => {
	
  it('should display a message', () => {
    expect(wrapper.contains('This is a message')).toEqual(true);
  });

  it('should display the username when the message is hovered over', () => {
    expect(wrapper.contains('Paul Fitzgerald')).toEqual(false);
    wrapper.setState({ showUsername: true });
    expect(wrapper.contains('Paul Fitzgerald')).toEqual(true);
  });
});