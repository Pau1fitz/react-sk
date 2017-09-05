import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Messages  from './Messages';

import { getChatLog, getMembersLog } from './service';

import moment from 'moment';

import './App.css';

class App extends Component {

	componentDidMount() {

		const { getChatLog, getMembersLog } = this.props;

		getChatLog();
		getMembersLog();

	}

	getMemberDetails(userId) {

		return this.props.members.find((member) => member.id === userId);

	}

	sortMessagesByDate(messages) {

		return this.props.messages.sort((a, b) => {

			return moment(b.timestamp) - moment(a.timestamp);

		});

	}

	render() {

		const { members, messages } = this.props;

		let messageArr = this.sortMessagesByDate(this.props.messages).map(msg => {

			const defaultImage = 'http://dummyimage.com/100x100.jpg/dddddd/000000';
			let member = this.getMemberDetails(msg.userId);
			let time = moment(msg.timestamp).format('DD-MM-YY');
			let name = `${member.firstName} ${member.lastName}`;

			return(

				<div className="messages-container" key={msg.id}>
					<span>{time}</span>
					<img src={member.avatar || defaultImage } />
					<Messages msg={msg} name={name} />
				</div>
			);
		});

		return (
			<ul>
				{messageArr}
			</ul>
		);
	}
}

App.propTypes = {
	messages: PropTypes.array,
	members: PropTypes.array,
	getChatLog: PropTypes.func,
	getMembersLog: PropTypes.func
};

const mapStateToProps = state => {

	return {
		messages: state.messages ? state.messages : [],
		members: state.members ? state.members : []
	};
};

const mapDispatchToProps = dispatch => {

	return bindActionCreators({
		getChatLog,
		getMembersLog

	 }, dispatch);

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
