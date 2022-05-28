import { Cups } from "../index";

describe("Cups", () => {
  const tests: [number, string][] = [
    [500, "2"],
    [250, "1"],
    [375, "1½"],
  ];

  tests.forEach(([input, expected]) => {
    test(`${input} milliliters is ${expected} cup(s)`, () =>
      expect(Cups(input)).toBe(expected));
  });
});
