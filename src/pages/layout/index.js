import React from 'react';
import Header from './components/header';

const Layout = (props) => {
  const { children, ...restProps } = props;

  return (
    <div>
      <Header {...restProps} />
      {props.children}
    </div>
  );
};

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
