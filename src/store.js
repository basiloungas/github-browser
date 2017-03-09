import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default ({ middleware = [] } = {}) => createStore(
    reducers,
    // initialState,
    compose(
      applyMiddleware.apply(null, [thunk, ...middleware]),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // TODO: remove
    ),
  );
