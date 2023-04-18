import { analyzeArray } from "../functions";

it("returns object", () => {
  const result = analyzeArray([1, 2, 3]);
  expect(
    typeof result === "object" && !Array.isArray(result) && result !== null
  ).toBe(true);
});

it("returns object with necessary keys", () => {
  const result = analyzeArray([1, 2, 3]);
  const necessaryKeys = ["average", "min", "max", "length"];
  const isNotValid = necessaryKeys.some((key) => !(key in result));
  expect(isNotValid).toBe(false);
});

it("returns correct average", () => {
  expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

it("returns correct min", () => {
  expect(analyzeArray([-1, 2, 3]).min).toBe(-1);
});

it("returns correct max", () => {
  expect(analyzeArray([-1, 2, 3]).max).toBe(3);
});

it("returns correct length", () => {
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});

it("returns error if argument is not an array", () => {
  expect(analyzeArray("1, 2, 3")).toBe(Error);
});
