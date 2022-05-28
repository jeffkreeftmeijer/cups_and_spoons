import { Cups } from "../index";

describe("Cups", () => {
  test("2", () => expect(Cups(500)).toBe("2"));
  test("1", () => expect(Cups(250)).toBe("1"));
});
