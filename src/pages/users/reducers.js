// import data from './users.json';
import * as Actions from './actions';

const users = (state, action) => {
  switch (action.type) {
    case Actions.FETCH_USERS:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case Actions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        list: action.payload,
      };
    case Actions.FETCH_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default users;
