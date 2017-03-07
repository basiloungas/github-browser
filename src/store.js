import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

export default ({ middleware = [] } = {}) => createStore(
    reducers,
    // initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // TODO: remove
    // compose(
      applyMiddleware.apply(null, [...middleware]),
    // )
  );
