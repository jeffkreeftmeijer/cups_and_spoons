import { Cups } from "../index";

describe("Cups", () => {
  const tests: [number, string][] = [
    [500, "2"],
    [250, "1"],
    [375, "1½"],
    [125, "½"],
    [85, "⅓"],
    [60, "¼"],
    [170, "⅔"],
    [180, "¾"],
    [0, "0"],
  ];

  tests.forEach(([input, expected]) => {
    test(`${input} milliliters is ${expected} cup(s)`, () =>
      expect(Cups(input)).toBe(expected));
  });

  const roundingTests: [number, string][] = [
    [29, "0"],
    [30, "¼"],
    [72, "¼"],
    [73, "⅓"],
    [104, "⅓"],
    [105, "½"],
    [147, "½"],
    [148, "⅔"],
    [174, "⅔"],
    [175, "¾"],
    [214, "¾"],
    [215, "1"],
  ];

  roundingTests.forEach(([input, expected]) => {
    test(`${input} milliliters is rounded to ${expected} cup(2)`, () =>
      expect(Cups(input)).toBe(expected));
  });
});
