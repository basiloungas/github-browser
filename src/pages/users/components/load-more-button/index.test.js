import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'react-bootstrap';
import { LoadMoreButton } from './index';

describe('pages > Users > Component', () => {
  describe('when "nextUrl does not exist"', () => {
    test('renders nothing', () => {
      const spy = jest.fn();
      const wrapper = shallow(<LoadMoreButton nextUrl={null} requestFetchMoreUsers={spy} />);

      expect(wrapper.html()).toBe(null);
    });
  });

  describe('when "nextUrl exists"', () => {
    test('it shows a button', () => {
      const spy = jest.fn();
      const wrapper = shallow(<LoadMoreButton nextUrl={'url'} requestFetchMoreUsers={spy} />);

      expect(wrapper.find(Button).exists()).toBe(true);
    });

    test('it shows a disabled button if "isFetching" is true', () => {
      const spy = jest.fn();
      const wrapper = shallow(<LoadMoreButton isFetching nextUrl={'url'} requestFetchMoreUsers={spy} />);

      expect(wrapper.find(Button).prop('disabled')).toBe(true);
    });

    test('it calls requestFetchMoreUsers on button click with the nextUrl as arg', () => {
      const spy = jest.fn();
      const wrapper = shallow(<LoadMoreButton isFetching nextUrl={'url'} requestFetchMoreUsers={spy} />);
      wrapper.find(Button).simulate('click');

      expect(spy).toBeCalledWith('url');
    });
  });
});
