export const Cups = (milliliters: number): string => {
  const cups = milliliters / 250;
  const [quotient, remainder] = divmod(cups, 1);
  let fraction = "";

  if (remainder === 0.5) {
    fraction = "½";
  }

  return quotient.toString() + fraction;
};

const divmod = (x: number, y: number): [number, number] => {
  return [Math.floor(x / y), x % y];
};
