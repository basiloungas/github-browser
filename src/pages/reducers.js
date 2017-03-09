import users from './users/reducers';
import user from './user/reducers';

export const usersInitialData = {
  list: [],
  meta: {},
  error: null,
  isFetching: false,
  isFetchingNext: false,
};

export default {
  users(state = usersInitialData, action) {
    state = users(state, action);
    state = user(state, action);

    return state;
  },
};
