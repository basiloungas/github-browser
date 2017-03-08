import React from 'react';
import { css } from 'aphrodite/no-important';
import styles from './styles';

export default function Loader(props) {
  const inlineStyle = {
    background: props.background,
    fontSize: props.size,
  };
  return (
    <div className={css(styles.main)} style={inlineStyle} >Loading...</div>
  );
}

Loader.defaultProps = {
  background: 'transparent',
  size: '5px',
};

Loader.propTypes = {
  background: React.PropTypes.string.isRequired,
  size: React.PropTypes.string.isRequired,
};
