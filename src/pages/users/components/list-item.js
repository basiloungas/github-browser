import React from 'react';
import { Link } from 'react-router';

const ListItem = (props) => {
  const {
    login,
    avatar_url,
    id,
  } = props.data;

  return (
    <li>
      <Link to={`/users/${login}`}>
        <span>{id}</span>
        <img width="100" height="100" src={avatar_url} alt="thumb" />
        <span>{login}</span>
      </Link>
    </li>
  );
};

ListItem.propTypes = {
  data: React.PropTypes.shape({
    login: React.PropTypes.string,
    avatar_url: React.PropTypes.string,
    id: React.PropTypes.number,
  }).isRequired,
};

export default ListItem;
