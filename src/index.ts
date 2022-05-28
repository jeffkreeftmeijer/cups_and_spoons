export const Cups = (milliliters: number): string => {
  const cups = milliliters / 250;
  const [quotient, remainder] = divmod(cups, 1);
  let fraction = "";

  if (remainder === 0.5) {
    fraction = "½";
  } else if (remainder === 0.34) {
    fraction = "⅓";
  } else if (remainder === 0.24) {
    fraction = "¼";
  } else if (remainder === 0.68) {
    fraction = "⅔";
  } else if (remainder === 0.72) {
    fraction = "¾";
  }

  return quotientToString(quotient) + fraction;
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
