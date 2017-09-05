import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageList from '../components/MessageList';
import { getChatLog, getMembersData } from '../actions';
import './App.css';

class App extends Component {

	componentDidMount() {
		const { getChatLog, getMembersData } = this.props;
		getChatLog();
		getMembersData();
	}

	render() {
		const { messages, members } = this.props;

		return (
			<ul>
				<MessageList messages={messages} members={members} />
			</ul>
		);
	}
}

App.propTypes = {
	messages: PropTypes.array,
	members: PropTypes.array,
	getChatLog: PropTypes.func,
	getMembersData: PropTypes.func
};

const mapStateToProps = state => {

	return {
		messages: state.messages ? state.messages : [],
		members: state.members ? state.members : []
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ getChatLog, getMembersData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
