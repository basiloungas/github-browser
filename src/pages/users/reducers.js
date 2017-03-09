import * as Actions from './actions';

function exportNextLink(headers) {
  try {
    const tokens = headers.link.split(', ');
    const nextToken = tokens.find(token => token.indexOf('"next"') !== -1);
    const url = nextToken.match('<(.*)>');
    return url[1];
  } catch (err) {
    return null;
  }
}

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
        list: action.payload.data,
        meta: {
          ...state.meta,
          next: exportNextLink(action.payload.headers),
        },
      };
    case Actions.FETCH_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case Actions.FETCH_MORE_USERS:
      return {
        ...state,
        error: null,
        isFetchingNext: true,
      };
    case Actions.FETCH_MORE_USERS_SUCCESS:
      return {
        ...state,
        error: null,
        isFetchingNext: false,
        list: state.list.concat(action.payload.data),
        meta: {
          ...state.meta,
          next: exportNextLink(action.payload.headers),
        },
      };
    case Actions.FETCH_MORE_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetchingNext: false,
      };
    default:
      return state;
  }
};

export default users;
