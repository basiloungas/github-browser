import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
import { css } from 'aphrodite/no-important';
import styles from './styles';

export const Header = (props) => {
  const { userLogin } = props;

  return (
    <PageHeader>
      <Choose>
        <When condition={userLogin}>
          <p>
            <Link className={css(styles.link)} to={'/users/'}>
              Github Users
            </Link>
            <small>
              &gt; {userLogin}
            </small>
          </p>
        </When>
        <Otherwise>
          <p>Github Users</p>
        </Otherwise>
      </Choose>
    </PageHeader>
  );
};

Header.defaultProps = {
  userLogin: null,
};

Header.propTypes = {
  userLogin: React.PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  return {
    userLogin: ownProps.params.userLogin,
  };
}

export default connect(mapStateToProps)(Header);
