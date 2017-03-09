import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './components/header';

const Layout = (props) => {
  const { children, ...restProps } = props;

  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={12}>
          <Header {...restProps} />
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12}>
          {props.children}
        </Col>
      </Row>
    </Grid>
  );
};

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
