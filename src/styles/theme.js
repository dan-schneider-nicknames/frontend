const theme = {
  colors: {
    purple: "#AD40B5",
    teal: "#66CED6",
    navy: "#001B2E",
    tan: "#FFC49B",
    paleGreen: "#C0DA74"
  },
  setFont: (size) => {
    return `font-size: ${size * baseFont}rem;`;
  },
};

const baseFont = 1.618 / 2;

export default theme;
