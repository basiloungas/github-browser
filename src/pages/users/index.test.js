import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { Users } from './index';
import ListItem from './components/list-item';
import LoadMoreButton from './components/load-more-button';
import Loader from '../../components/loader';

describe('pages > Users > Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe('when "state.users.isFetching"', () => {
    test('shows the loader', () => {
      const wrapper = shallow(<Users users={[]} isFetching />);
      expect(wrapper.find(Loader).exists()).toBe(true);
    });
  });

  describe('when "state.users.isFetching" is false', () => {
    test('it does not show loader', () => {
      const wrapper = shallow(<Users users={[]} isFetching={false} />);
      expect(wrapper.find(Loader).exists()).toBe(false);
    });

    test('it renders a list of ListItems', () => {
      const users = [{ id: 1 }, { id: 2 }];
      const wrapper = shallow(<Users users={users} isFetching={false} />);

      expect(wrapper.find(ListItem)).toHaveLength(2);
    });

    test('it renders the LoadMoreButton', () => {
      const users = [{ id: 1 }, { id: 2 }];
      const wrapper = shallow(<Users users={users} isFetching={false} />);

      expect(wrapper.find(LoadMoreButton).exists()).toBe(true);
    });
  });
});
