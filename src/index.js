import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
  Redirect,
  IndexRoute,
  IndexRedirect,
} from 'react-router';
import createStore from './store';

import Layout from './pages/layout';
import Users from './pages/users';
import User from './pages/user';

import './index.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout} >
        <IndexRedirect to="/users" />

        <Route path="users" >
          <IndexRoute component={Users} />
          <Route path=":userLogin" component={User} />
        </Route>

        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
