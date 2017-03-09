import React from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite/no-important';
import { Col } from 'react-bootstrap';
import styles from './styles';

const ListItem = (props) => {
  const {
    login,
    avatar_url,
    id,
  } = props.data;

  const linkClassNames = `${css(styles.container)} list-group-item clearfix`;

  return (
    <Col xs={12} sm={6} lg={4}>
      <Link className={linkClassNames} to={`/users/${login}`}>
        <img
          className={css(styles.image)}
          width="100"
          height="100"
          src={avatar_url}
          alt="thumb"
        />
        <p><small>Id:</small> {id}</p>
        <p><small>Login:</small> {login}</p>
      </Link>
    </Col>
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
