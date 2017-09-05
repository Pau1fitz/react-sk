import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('should render without crashing', () => {

  const div = document.createElement('div');

  const getChatLog = () => {};
  const getMembersData = () => {};

  ReactDOM.render(<App.WrappedComponent getChatLog={getChatLog} getMembersData={getMembersData} />, div);
});
