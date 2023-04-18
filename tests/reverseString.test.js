import { reverseString } from "../functions";

it("reverses a string", () => {
  expect(reverseString("ab cde")).toBe("edc ba");
});

it("returns null if no string is provided", () => {
  expect(reverseString()).toBe(null);
});

it("returns the same input if length of a string is 1", () => {
  expect(reverseString("a")).toBe("a");
});

it("returns a reversed string if number is provided", () => {
  expect(reverseString(1234)).toBe("4321");
});
