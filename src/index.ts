export const Cups = (milliliters: number): string => {
  const cups = milliliters / 250;
  const [quotient, remainder] = divmod(cups, 1);

  const wholes = quotientToString(quotient);
  const fraction = remainderToFraction(remainder);

  if (wholes === "" && fraction === "") {
    return "0";
  } else {
    return wholes + fraction;
  }
};

export const Tablespoons = (milliliters: number): string => {
  return Math.round(milliliters / 15).toString();
};

const divmod = (x: number, y: number): [number, number] => {
  return [Math.floor(x / y), x % y];
};

const quotientToString = (quotient: number): string => {
  if (quotient == 0) {
    return "";
  } else {
    return quotient.toString();
  }
};

const remainderToFraction = (remainder: number): string => {
  if (remainder < 0.12) {
    return "";
  } else if (remainder < 0.29) {
    return "¼";
  } else if (remainder < 0.42) {
    return "⅓";
  } else if (remainder < 0.59) {
    return "½";
  } else if (remainder < 0.7) {
    return "⅔";
  } else if (remainder < 0.86) {
    return "¾";
  } else {
    return "1";
  }
};
