import * as Actions from './actions';
import reducers from './reducers';
import { usersInitialData } from '../reducers';

describe('pages > users -> reducer', () => {
  describe('on FETCH_USERS', () => {
    test('sets "isFetching"', () => {
      const newState = reducers(usersInitialData, Actions.fetchUsers());
      const expectedValue = {
        isFetching: true,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });
  describe('on FETCH_USERS_SUCCESS', () => {
    let action;
    let payload;

    test('unsets "isFetching"', () => {
      payload = {};
      action = Actions.fetchUsersSuccess(payload);
      const newState = reducers(usersInitialData, action);
      const expectedValue = {
        isFetching: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets data on list', () => {
      const data = { koko: 'lala' };
      payload = {
        data,
      };
      action = Actions.fetchUsersSuccess(payload);

      const newState = reducers(usersInitialData, action);
      const expectedValue = {
        list: data,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets meta.next', () => {
      const data = { koko: 'lala' };
      payload = {
        data,
        headers: {
          link: '<https://api.github.com/users?since=46>; rel="next", <https://api.github.com/users{?since}>; rel="first"',
        },
      };
      action = Actions.fetchUsersSuccess(payload);

      const newState = reducers(usersInitialData, action);
      const expectedValue = {
        meta: {
          next: 'https://api.github.com/users?since=46',
        },
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_USERS_FAIL', () => {
    test('unsets "isFetching"', () => {
      const newState = reducers(usersInitialData, Actions.fetchUsersFail());
      const expectedValue = {
        isFetching: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets "error"', () => {
      const error = {};
      const newState = reducers(usersInitialData, Actions.fetchUsersFail(error));
      const expectedValue = {
        error,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_MORE_USERS', () => {
    test('sets "isFetching"', () => {
      const newState = reducers(usersInitialData, Actions.fetchMoreUsers());
      const expectedValue = {
        isFetchingNext: true,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_MORE_USERS_SUCCESS', () => {
    let action;
    let payload;

    test('unsets "isFetching"', () => {
      payload = {};
      action = Actions.fetchMoreUsersSuccess(payload);
      const newState = reducers(usersInitialData, action);
      const expectedValue = {
        isFetchingNext: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets data on list', () => {
      const list = [1, 2, 3];
      const initialState = {
        ...usersInitialData,
        list,
      };

      payload = {
        data: [4, 5, 6],
      };

      action = Actions.fetchMoreUsersSuccess(payload);

      const newState = reducers(initialState, action);
      const expectedValue = {
        list: [1, 2, 3, 4, 5, 6],
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('creates new array instace for appended data', () => {
      const list = [1, 2, 3];
      const initialState = {
        ...usersInitialData,
        list,
      };
      payload = { data: [4, 5, 6] };
      action = Actions.fetchMoreUsersSuccess(payload);

      const newState = reducers(initialState, action);

      expect(newState.list).not.toBe(list);
    });

    test('sets meta.next', () => {
      const data = { koko: 'lala' };
      payload = {
        data,
        headers: {
          link: '<https://api.github.com/users?since=48>; rel="next", <https://api.github.com/users{?since}>; rel="first"',
        },
      };
      action = Actions.fetchMoreUsersSuccess(payload);

      const newState = reducers(usersInitialData, action);
      const expectedValue = {
        meta: {
          next: 'https://api.github.com/users?since=48',
        },
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_MORE_USERS_FAIL', () => {
    test('unsets "isFetching"', () => {
      const newState = reducers(usersInitialData, Actions.fetchMoreUsersFail());
      const expectedValue = {
        isFetching: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets "error"', () => {
      const error = {};
      const newState = reducers(usersInitialData, Actions.fetchMoreUsersFail(error));
      const expectedValue = {
        error,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });
});
