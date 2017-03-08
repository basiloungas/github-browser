import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export const Header = (props) => {
  const { userLogin } = props;

  return (
    <header>
      <Choose>
        <When condition={userLogin}>
          <h1>
            <Link to={'/users/'}>
              Github Users
            </Link>
            &gt; {userLogin}
          </h1>
        </When>
        <Otherwise>
          <h1>Github Users</h1>
        </Otherwise>
      </Choose>
    </header>
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
