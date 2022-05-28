import { Teaspoons } from "../index";

describe("Teaspoons", () => {
  const tests: [number, string][] = [
    [10, "2"],
    [5, "1"],
    [15 / 2, "1½"],
    [5 / 2, "½"],
    [5 / 4, "¼"],
    [15 / 4, "¾"],
    [0, "0"],
  ];

  tests.forEach(([input, expected]) => {
    test(`${input} milliliters is ${expected} teaspoon(s)`, () =>
      expect(Teaspoons(input)).toBe(expected));
  });

  const roundingTests: [number, string][] = [
    [0.62, "0"],
    [0.63, "¼"],
    [1.87, "¼"],
    [1.88, "½"],
    [3.12, "½"],
    [3.13, "¾"],
    [4.37, "¾"],
    [4.38, "1"],
    [9.38, "2"],
  ];

  roundingTests.forEach(([input, expected]) => {
    test(`${input} milliliters is rounded to ${expected} teaspoon(s)`, () =>
      expect(Teaspoons(input)).toBe(expected));
  });
});
