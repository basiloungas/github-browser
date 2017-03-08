import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import githubApi from '../../../providers/github';
import * as Actions from '../actions';

function EnsureUsers(WrappedComponent) {
  class EnsureUsersWrapper extends React.Component {
    componentDidMount() {
      const {
        users,
        fetchUsers,
        fetchUsersSuccess,
        fetchUsersFail,
      } = this.props;

      if (users.length <= 1) {
        fetchUsers();

        githubApi
          .fetchAllUsers()
          .then(fetchUsersSuccess)
          .catch(fetchUsersFail);
      }
    }

    render() {
      const {
        users,
        fetchUsers,
        fetchUsersSuccess,
        fetchUsersFail,
        ...restProps
      } = this.props;

      return (
        <WrappedComponent {...restProps} />
      );
    }
  }

  EnsureUsersWrapper.propTypes = {
    users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    fetchUsers: React.PropTypes.func.isRequired,
    fetchUsersSuccess: React.PropTypes.func.isRequired,
    fetchUsersFail: React.PropTypes.func.isRequired,
  };

  function mapStateToProps(state) {
    return {
      users: state.users.list,
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      fetchUsers: Actions.fetchUsers,
      fetchUsersSuccess: Actions.fetchUsersSuccess,
      fetchUsersFail: Actions.fetchUsersFail,
    }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(EnsureUsersWrapper);
}

export default EnsureUsers;
