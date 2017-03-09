import * as Actions from './actions';
import reducers from './reducers';
import { usersInitialData } from '../reducers';

describe('pages > user -> reducer', () => {
  describe('on FETCH_USER', () => {
    test('sets "isFetching"', () => {
      const newState = reducers(usersInitialData, Actions.fetchUser());
      const expectedValue = {
        isFetching: true,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });
  describe('on FETCH_USER_SUCCESS', () => {
    let action;
    let payload;

    test('unsets "isFetching"', () => {
      payload = {};
      action = Actions.fetchUserSuccess(payload);
      const newState = reducers(usersInitialData, action);
      const expectedValue = {
        isFetching: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('adds fetched user to the list', () => {
      const data = { koko: 'lala' };
      payload = {
        data,
      };
      action = Actions.fetchUserSuccess(payload);

      const newState = reducers(usersInitialData, action);
      const expectedValue = {
        list: [data],
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_USER_FAIL', () => {
    test('unsets "isFetching"', () => {
      const newState = reducers(usersInitialData, Actions.fetchUserFail());
      const expectedValue = {
        isFetching: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets "error"', () => {
      const error = {};
      const newState = reducers(usersInitialData, Actions.fetchUserFail(error));
      const expectedValue = {
        error,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });
});
