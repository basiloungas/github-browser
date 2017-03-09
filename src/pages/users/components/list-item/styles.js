import {
  StyleSheet,
} from 'aphrodite/no-important';

export default StyleSheet.create({
  container: {
    cursor: 'pointer',
    padding: '20px',
    marginBottom: '16px !important',
    display: 'block',
    color: 'inherit',
    textDecoration: 'none',
    fontSize: '20px',
    overflow: 'hidden',
    height: '140px',
    ':hover': {
      background: '#f5f5f5',
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  p: {
    margin: '0',
  },
  image: {
    float: 'left',
    margin: '0 30px 0 0',
  },
});
