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
    if (quotient === 0) {
      return "¼";
    } else {
      return quotient.toString() + "¼";
    }
  } else if (remainder < 0.42) {
    if (quotient === 0) {
      return "⅓";
    } else {
      return quotient.toString() + "⅓";
    }
  } else if (remainder < 0.59) {
    if (quotient === 0) {
      return "½";
    } else {
      return quotient.toString() + "½";
    }
  } else if (remainder < 0.7) {
    if (quotient === 0) {
      return "⅔";
    } else {
      return quotient.toString() + "⅔";
    }
  } else if (remainder < 0.86) {
    if (quotient === 0) {
      return "¾";
    } else {
      return quotient.toString() + "¾";
    }
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
    if (quotient === 0) {
      return "¼";
    } else {
      return quotient.toString() + "¼";
    }
  } else if (remainder < 0.625) {
    if (quotient === 0) {
      return "½";
    } else {
      return quotient.toString() + "½";
    }
  } else if (remainder < 0.875) {
    if (quotient === 0) {
      return "¾";
    } else {
      return quotient.toString() + "¾";
    }
  } else {
    return (quotient + 1).toString();
  }
};

const divmod = (x: number, y: number): [number, number] => {
  return [Math.floor(x / y), x % y];
};
