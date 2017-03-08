
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const fetchUsersSuccess = payload => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';
export const fetchUsersFail = () => ({
  type: FETCH_USERS_FAIL,
});
