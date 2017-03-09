
export const FETCH_USER = 'FETCH_USER';
export const fetchUser = () => ({
  type: FETCH_USER,
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = payload => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
export const fetchUserFail = payload => ({
  type: FETCH_USER_FAIL,
  payload,
});
