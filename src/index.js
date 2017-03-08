import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
  Redirect,
} from 'react-router';
import createStore from './store';
import Layout from './pages/layout';
import './index.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout} >
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
