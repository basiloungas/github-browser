import fetcher from '../utilities/fetcher';

const baseUrl = 'https://api.github.com';

function getFetchOptions(extraOptions) {
  return {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    ...extraOptions,
  };
}

const fetchAllUsers = () => {
  const url = `${baseUrl}/users`;
  const options = getFetchOptions();

  return fetcher(url, options);
};

const fetchMoreUsers = (url) => {
  const options = getFetchOptions();

  return fetcher(url, options);
};

const fetchUser = (username) => {
  const url = `${baseUrl}/users/${username}`;
  const options = getFetchOptions();

  return fetcher(url, options);
};

export default {
  fetchAllUsers,
  fetchMoreUsers,
  fetchUser,
};
