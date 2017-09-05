import React from 'react';
import { shallow } from 'enzyme';
import MessageList from './MessageList';

describe('<MessageList />', () => {

	it('should display a list of messages', () => {

	 	const messages = [{
    		id: '1',
	    	userId: '1',
	    	message: 'This is a message',
	    	timestamp: '2017-02-09T04:27:38Z'
		}];

	  	const members = [{
	    	"id": "1",
		    "firstName": "Bob",
		    "lastName": "Dylan",
		    "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
		}];

		const wrapper = shallow(
			<MessageList messages={messages} members={members} />
  		);

		expect(wrapper.find('.messages-container')).toHaveLength(1);

  	});

});