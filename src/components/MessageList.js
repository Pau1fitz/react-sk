import React from 'react';
import moment from 'moment';
import Message from './Message';


const MessageList = ({messages, members}) => {

	let getMemberDetails = (userId) => {

		return members.find(member => member.id === userId);

	}

	let sortMessagesByDate = (messages) => {

		return (messages && messages.length > 0) ? messages.sort((a, b) => {

			return moment(b.timestamp) - moment(a.timestamp);

		}) : [];

	}

	return (
		<div>
			{sortMessagesByDate(messages).map(msg => {

				const defaultImage = 'http://dummyimage.com/100x100.jpg/dddddd/000000';
				let member = getMemberDetails(msg.userId);
				let time = moment(msg.timestamp).format('DD-MM-YY');
				let name = `${member.firstName} ${member.lastName}`;

				return(

					<div className="messages-container" key={msg.id}>
						<img alt="avatar" src={member.avatar || defaultImage } />
						<Message message={msg.message} name={name} time={time} />
					</div>
				);

			})
		}	

		</div>
	);
}


export default MessageList;