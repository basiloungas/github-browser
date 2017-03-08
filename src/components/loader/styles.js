import {
  StyleSheet,
} from 'aphrodite/no-important';

const keyframes = {
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
};

export default StyleSheet.create({
  main: {
    borderRadius: '50%',
    color: '#ffffff',
    fontSize: '11px',
    textIndent: '-99999em',
    margin: '1em',
    display: 'inline-block',
    position: 'relative',
    width: '10em',
    height: '10em',
    boxShadow: 'inset 0 0 0 1em',
    transform: 'translateZ(0)',
    verticalAlign: 'middle',

    ':before': {
      position: 'absolute',
      content: '""',
      background: 'inherit',

      width: '6em',
      height: '11em',
      borderRadius: '11em 0 0 11em',
      top: '-0.5em',
      left: '-0.5em',
      transformOrigin: '5.5em 5.5em',

      animationName: [keyframes],
      animationDuration: '2s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease',
      animationDelay: '1.5s',
    },

    ':after': {
      position: 'absolute',
      content: '""',

      width: '6em',
      height: '11em',
      background: 'inherit',
      borderRadius: '0 11em 11em 0',
      top: '-0.5em',
      left: '5.5em',
      transformOrigin: '0px 5.5em',


      animationName: [keyframes],
      animationDuration: '2s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease',

    },
  },
});
