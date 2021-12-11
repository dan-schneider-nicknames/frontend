const theme = {
  primeColor: "black",
  secondColor: "white",
  setFont: (size) => {
    return `font-size: ${size * baseFont}rem;`;
  },
};

const baseFont = 1.618 / 2;

export default theme;
