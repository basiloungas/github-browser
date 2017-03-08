import { combineReducers } from 'redux';
import pageReducers from './pages/reducers';

export default combineReducers({
  ...pageReducers,
});
