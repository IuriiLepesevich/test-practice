import { capitalize } from "../functions";

it("capitalize one letter", () => {
  expect(capitalize("a")).toBe("A");
});

it("return null if no argument is provided", () => {
  expect(capitalize()).toBe(null);
});

it("capitalize first letter in a string", () => {
  expect(capitalize("hello, world!")).toBe("Hello, world!");
});

it("Don't change first letter if it is capitalized", () => {
  expect(capitalize("Hello, world!")).toBe("Hello, world!");
});
