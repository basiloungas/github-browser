import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Panel, ListGroup } from 'react-bootstrap';

import ensureUsers from './hocs/ensureUsers';
import ListItem from './components/list-item';
import Loader from '../../components/loader/index';

const Users = (props) => {
  const { users, isFetching } = props;

  // TODO: add animation on list items
  return (
    <Panel style={{ background: '#e8e8e8' }}>
      <Choose>
        <When condition={isFetching}>
          <div style={{ textAlign: 'center', margin: '130px 0' }}>
            <Loader background="#e8e8e8" size="15px" />
          </div>
        </When>
        <Otherwise>
          <Row className="show-grid">
            <ListGroup componentClass="ul">
              { users.map(user => <ListItem key={user.id} data={user} />) }
            </ListGroup>
          </Row>
        </Otherwise>
      </Choose>
    </Panel>
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
