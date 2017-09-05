import { getMessages, getMembers } from './data';

export const getChatLog = () => {

	return {
		type: 'MESSAGES_LOADING',
		payload: getMessages()
	};

};

export const getMembersLog = () => {

	return {
		type: 'USERS_LOADING',
		payload: getMembers()
	};

};
