import githubApi from '../../providers/github';

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


export const FETCH_MORE_USERS = 'FETCH_MORE_USERS';
export const fetchMoreUsers = () => ({
  type: FETCH_MORE_USERS,
});

export const FETCH_MORE_USERS_SUCCESS = 'FETCH_MORE_USERS_SUCCESS';
export const fetchMoreUsersSuccess = payload => ({
  type: FETCH_MORE_USERS_SUCCESS,
  payload,
});

export const FETCH_MORE_USERS_FAIL = 'FETCH_MORE_USERS_FAIL';
export const fetchMoreUsersFail = () => ({
  type: FETCH_MORE_USERS_FAIL,
});

export const requestFetchMoreUsers = url => (dispatch) => {
  dispatch(fetchMoreUsers());

  githubApi
    .fetchMoreUsers(url)
    .then(data => dispatch(fetchMoreUsersSuccess(data)))
    .catch(err => dispatch(fetchMoreUsersFail(err)));
};
