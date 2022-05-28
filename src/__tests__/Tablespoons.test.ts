import { Tablespoons } from "../index";

describe("Tablespoons", () => {
  const tests: [number, string][] = [
    [30, "2"],
    [15, "1"],
    [0, "0"],
  ];

  tests.forEach(([input, expected]) => {
    test(`${input} milliliters is ${expected} tablespoons`, () =>
      expect(Tablespoons(input)).toBe(expected));
  });

  const roundingTests: [number, string][] = [[8, "1"]];

  roundingTests.forEach(([input, expected]) => {
    test(`${input} milliliters is rounded to ${expected} tablespoons`, () =>
      expect(Tablespoons(input)).toBe(expected));
  });
});
