import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Button } from 'react-bootstrap';
import * as Actions from '../../actions';

export const LoadMoreButton = (props) => {
  const { nextUrl, isFetching, requestFetchMoreUsers } = props;

  return (
    <If condition={nextUrl}>
      <Col xs={12}>
        <Button
          disabled={isFetching}
          block
          bsSize="large"
          bsStyle="primary"
          onClick={() => requestFetchMoreUsers(nextUrl)}
        >
          Load More
        </Button>
      </Col>
    </If>
  );
};

LoadMoreButton.defaultProps = {
  nextUrl: null,
  isFetching: false,
};

LoadMoreButton.propTypes = {
  isFetching: React.PropTypes.bool.isRequired,
  nextUrl: React.PropTypes.string,
  requestFetchMoreUsers: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isFetching: state.users.isFetchingNext,
    nextUrl: state.users.meta.next,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestFetchMoreUsers: Actions.requestFetchMoreUsers,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreButton);
