import * as Actions from './actions';

const users = (state, action) => {
  switch (action.type) {
    case Actions.FETCH_USER:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case Actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        list: state.list.concat([action.payload]),
      };
    case Actions.FETCH_USER_FAIL:
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
