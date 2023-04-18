import { caesarCipher } from "../functions";

it("returns shifted string with small letters", () => {
  expect(caesarCipher("abcd", 1)).toBe("bcde");
});

it("returns shifted string with capitalized letters", () => {
  expect(caesarCipher("ABCD", 1)).toBe("BCDE");
});

it("returns shifted string with small and capitalized letters", () => {
  expect(caesarCipher("abCD", 1)).toBe("bcDE");
});

it("returns shifted string with spaces", () => {
  expect(caesarCipher("a bCD", 1)).toBe("b cDE");
});

it("returns shifted string wrapping from z to a", () => {
  expect(caesarCipher("abcz", 1)).toBe("bcda");
});

it("returns shifted string wrapping from Z to A", () => {
  expect(caesarCipher("abcZ", 1)).toBe("bcdA");
});

it("returns shifted string wrapping from A to Z, with negative shift", () => {
  expect(caesarCipher("abcA", -1)).toBe("zabZ");
});

it("returns shifted string with punctuation", () => {
  expect(caesarCipher("Hello, World!", -7)).toBe("Axeeh, Phkew!");
});

it("returns error if type of first argument is not a string", () => {
  expect(caesarCipher(12, -7)).toBe(Error);
});

it("returns error if type of second argument is not a number", () => {
  expect(caesarCipher("Hello, World!", "6")).toBe(Error);
});

it("returns shifted string with big shift", () => {
  expect(caesarCipher("Yello, world!", 11)).toBe("Jpwwz, hzcwo!");
});

it("returns shifted string with big negative shift", () => {
  expect(caesarCipher("Yello, world!", -11)).toBe("Ntaad, ldgas!");
});
