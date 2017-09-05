import React from 'react';
import { shallow } from 'enzyme';
import Messages from './Messages';

let wrapper;

beforeEach(() => {

  	let msg = {
  		id: 1,
  		message: 'This is a message'
  	}

    wrapper = shallow(
      <Messages 
        msg={msg}
         name={"Paul Fitzgerald"}
      />
    );

});

describe('<Messages />', () => {
  it('should display a message', () => {
    expect(wrapper.contains('This is a message')).toEqual(true);
 
  });

  it('should display the username when the message is hovered over', () => {
    expect(wrapper.contains('Paul Fitzgerald')).toEqual(false);
	wrapper.setState({ showUsername: true });
	expect(wrapper.contains('Paul Fitzgerald')).toEqual(true);
  });
});