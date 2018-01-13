import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Routes from './components/routes.jsx';
import store from './store.js';

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
      <Routes/>
    </HashRouter>
  </Provider>,
  document.getElementById('app'));