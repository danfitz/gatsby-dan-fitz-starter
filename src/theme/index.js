const breakpoints = ['992px'];

const fontSizes = ['1rem', '2rem', '3rem'];
fontSizes.body = fontSizes[0];
fontSizes.subheading = fontSizes[1];
fontSizes.heading = fontSizes[2];

const colors = {
  blue: '#000080',
  white: '#fff',
  black: '#000',
};

const space = [0, '1rem', '2rem', '3rem'];
space.sm = space[1];
space.md = space[2];

export default {
  breakpoints,
  fontSizes,
  colors,
  space,
  fonts: {},
  fontWeights: {},
  lineHeights: {},
  shadows: {},
  variants: {},
  text: {
    heading: {
      fontSize: 'heading',
      color: 'blue',
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'black',
    },
  },
};
