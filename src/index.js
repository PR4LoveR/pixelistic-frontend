import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));

export const ec2_port = process.env.PORT;
export const ec2_host = process.env.HOST;

ReactDOM.render((
  <Provider store={store}>
    { Routes }
  </Provider>
), document.getElementById('root'));
