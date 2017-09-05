import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

	state = {
		showUsername: false
	};

	showUsername = () => {
		this.setState(() => {
			return {
				showUsername: true
			};
		});
	}

	hideUsername = () => {
		this.setState(() => {
			return {
				showUsername: false
			};
		});
	}

	render() {

		const { message, name, time } = this.props;

		return(
			<li>
				<span>{time}</span>
				<span className="message" onMouseEnter={this.showUsername} onMouseLeave={this.hideUsername}>
					{message}
				</span>
			
				{this.state.showUsername && (
					<span className="user-name">{name}</span>
				)}
			</li>
			
		);
	}
}


Message.propTypes = {
	message: PropTypes.string,
	name: PropTypes.string
};

export default Message;
