import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import './index.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <p />
  </Provider>,
  document.getElementById('root'),
);
