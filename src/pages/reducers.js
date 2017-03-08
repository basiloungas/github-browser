import users from './users/reducers';

const usersInitialData = {
  list: [],
  meta: {},
  error: null,
  isFetching: false,
};

export default {
  users(state = usersInitialData, action) {
    return users(state, action);
  },
};
