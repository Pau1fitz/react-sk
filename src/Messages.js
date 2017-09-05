import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Messages extends Component {

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

		const { msg, name } = this.props;

		return(

		<div>


			<li>
				<span className="message" onMouseEnter={this.showUsername} onMouseLeave={this.hideUsername}>
					{msg.message}
				</span>
				
				{this.state.showUsername && (
					<span className="user-name">{name}</span>
				)}
			</li>
			</div>
		);

	}
}


Messages.propTypes = {
	msg: PropTypes.object,
	name: PropTypes.string
};



export default Messages;
