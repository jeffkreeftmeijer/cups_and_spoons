export const Cups = (milliliters: number): string => {
  const cups = milliliters / 250;
  const [quotient, remainder] = divmod(cups, 1);

  if (remainder < 0.12) {
    if (quotient === 0) {
      return "0";
    } else {
      return quotient.toString();
    }
  } else if (remainder < 0.29) {
    return toStringWithoutZero(quotient) + "¼";
  } else if (remainder < 0.42) {
    return toStringWithoutZero(quotient) + "⅓";
  } else if (remainder < 0.59) {
    return toStringWithoutZero(quotient) + "½";
  } else if (remainder < 0.7) {
    return toStringWithoutZero(quotient) + "⅔";
  } else if (remainder < 0.86) {
    return toStringWithoutZero(quotient) + "¾";
  } else {
    return (quotient + 1).toString();
  }
};

export const Tablespoons = (milliliters: number): string => {
  return Math.round(milliliters / 15).toString();
};

export const Teaspoons = (milliliters: number): string => {
  const teaspoons = milliliters / 5;
  const [quotient, remainder] = divmod(teaspoons, 1);

  if (remainder < 0.125) {
    if (quotient === 0) {
      return "0";
    } else {
      return quotient.toString();
    }
  } else if (remainder < 0.375) {
    return toStringWithoutZero(quotient) + "¼";
  } else if (remainder < 0.625) {
    return toStringWithoutZero(quotient) + "½";
  } else if (remainder < 0.875) {
    return toStringWithoutZero(quotient) + "¾";
  } else {
    return (quotient + 1).toString();
  }
};

const toStringWithoutZero = (quotient: number): string => {
  if (quotient === 0) {
    return "";
  } else {
    return quotient.toString();
  }
};

const divmod = (x: number, y: number): [number, number] => {
  return [Math.floor(x / y), x % y];
};
