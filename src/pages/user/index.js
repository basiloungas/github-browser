import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import Loader from '../../components/loader/index';
import ensureUser from './hocs/ensureUser';

export const User = (props) => {
  const {
    user: {
      login,
      id,
    },
    isFetching,
  } = props;

  return (

    <div style={{ padding: '100px', background: 'pink' }}>
      <Choose>
        <When condition={isFetching}>
          <Loader background="pink" size="15px" />
        </When>
        <Otherwise>
          <p>This is user: {login} with id: {id}</p>
        </Otherwise>
      </Choose>
      <Link to={'/'}>Back</Link>
    </div>
  );
};

User.defaultProps = {
  user: {},
};

User.propTypes = {
  user: React.PropTypes.shape({
    login: React.PropTypes.string,
    id: React.PropTypes.number,
  }),
  isFetching: React.PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  const requestedUserLogin = ownProps.params.userLogin;

  return {
    user: state.users.list.find(user => user.login === requestedUserLogin),
    isFetching: state.users.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default ensureUser(connect(mapStateToProps, mapDispatchToProps)(User));
