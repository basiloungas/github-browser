import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Jumbotron, Button } from 'react-bootstrap';
import { css } from 'aphrodite/no-important';
import styles from './styles';
import Loader from '../../components/loader/index';
import ensureUser from './hocs/ensureUser';

export const User = (props) => {
  const {
    user: {
      login,
      avatar_url,
      html_url,
    },
    router,
    isFetching,
  } = props;

  const onCLick = (e) => {
    e.preventDefault();
    router.push({ pathname: '/' });
  };

  return (
    <Jumbotron className={css(styles.container)}>
      <Choose>
        <When condition={isFetching}>
          <div style={{ textAlign: 'center', margin: '130px 0' }}>
            <Loader background="#eee" size="15px" />
          </div>
        </When>
        <Otherwise>
          <h1>Github user: {login}</h1>
          <a target="blank" href={html_url}>
            <img
              className={css(styles.image)}
              width="300"
              height="300"
              src={avatar_url}
              alt="thumb"
            />
          </a>
          <p>User's data:</p>

          <pre className={css(styles.pre)}>
            {JSON.stringify(props.user, null, 2)}
          </pre>

          <div className={css(styles.button)}>
            <Button bsSize="large" bsStyle="primary" onClick={onCLick}>Back</Button>
          </div>
        </Otherwise>
      </Choose>
    </Jumbotron>
  );
};

User.defaultProps = {
  user: {},
};

User.propTypes = {
  user: React.PropTypes.shape({
    login: React.PropTypes.string,
    avatar_url: React.PropTypes.string,
    html_url: React.PropTypes.string,
  }),
  isFetching: React.PropTypes.bool.isRequired,
  router: React.PropTypes.shape().isRequired,
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
