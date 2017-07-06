import 'babel-polyfill';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import React from 'react';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';

// import 'todomvc-app-css/index.css';
import './index.scss';

require('./assets/icons/favicon.png');

const store = configureStore();

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
    </Router>
  </Provider>,
  document.getElementById('root')
);