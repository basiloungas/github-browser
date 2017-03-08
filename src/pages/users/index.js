import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ensureUsers from './hocs/ensureUsers';
import ListItem from './components/list-item';
import Loader from '../../components/loader/index';

const Users = (props) => {
  const { users, isFetching } = props;

  // TODO: add animation on list items
  return (
    <div style={{ padding: '100px', background: 'pink' }}>
      <Choose>
        <When condition={isFetching}>
          <Loader background="pink" size="15px" />
        </When>
        <Otherwise>
          <ul>
            { users.map(user => <ListItem key={user.id} data={user} />) }
          </ul>
        </Otherwise>
      </Choose>
    </div>
  );
};

Users.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  isFetching: React.PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users.list,
    isFetching: state.users.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default ensureUsers(connect(mapStateToProps, mapDispatchToProps)(Users));
