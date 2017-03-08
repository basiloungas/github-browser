import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import githubApi from '../../../providers/github';
import * as Actions from '../actions';

function EnsureUser(WrappedComponent) {
  class EnsureUserWrapper extends React.Component {
    componentDidMount() {
      const {
        user,
        fetchUser,
        fetchUserSuccess,
        fetchUserFail,
        params: {
          userLogin,
        },
      } = this.props;

      if (!user) {
        fetchUser();

        githubApi
          .fetchUser(userLogin)
          .then(fetchUserSuccess)
          .catch(fetchUserFail);
      }
    }

    render() {
      const {
        user,
        fetchUser,
        fetchUserSuccess,
        fetchUserFail,
        ...restProps
      } = this.props;

      return (
        <WrappedComponent {...restProps} />
      );
    }
  }

  EnsureUserWrapper.defaultProps = {
    user: null,
  };

  EnsureUserWrapper.propTypes = {
    user: React.PropTypes.shape(),
    params: React.PropTypes.shape({
      userLogin: React.PropTypes.string,
    }).isRequired,
    fetchUser: React.PropTypes.func.isRequired,
    fetchUserSuccess: React.PropTypes.func.isRequired,
    fetchUserFail: React.PropTypes.func.isRequired,
  };

  function mapStateToProps(state, ownProps) {
    const requestedUserLogin = ownProps.params.userLogin;

    return {
      user: state.users.list.find(user => user.login === requestedUserLogin),
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      fetchUser: Actions.fetchUser,
      fetchUserSuccess: Actions.fetchUserSuccess,
      fetchUserFail: Actions.fetchUserFail,
    }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(EnsureUserWrapper);
}

export default EnsureUser;
