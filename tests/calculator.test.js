import { calculator } from "../functions";

// add

it("adds 2 numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

it("returns error if less than 2 arguments are provided", () => {
  expect(calculator.add(1)).toBe(Error);
});

it("returns error if more than 2 arguments are provided", () => {
  expect(calculator.add(1, 2, 3)).toBe(Error);
});

it("adds 2 negative values", () => {
  expect(calculator.add(-1, -2)).toBe(-3);
});

// subtract

it("subtracts 2 numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

it("returns error if less than 2 arguments are provided", () => {
  expect(calculator.subtract(1)).toBe(Error);
});

it("returns error if more than 2 arguments are provided", () => {
  expect(calculator.subtract(1, 2, 3)).toBe(Error);
});

it("subtracts 2 negative values", () => {
  expect(calculator.subtract(-1, -2)).toBe(1);
});

// divide

it("divides 2 numbers", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

it("returns error if less than 2 arguments are provided", () => {
  expect(calculator.divide(1)).toBe(Error);
});

it("returns error if more than 2 arguments are provided", () => {
  expect(calculator.divide(1, 2, 3)).toBe(Error);
});

it("divides 2 negative values", () => {
  expect(calculator.divide(-1, -2)).toBe(0.5);
});

it("returns error if deviser is 0", () => {
  expect(calculator.divide(-1, 0)).toBe(Error);
});

// multiply

it("multiplies 2 numbers", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

it("returns error if less than 2 arguments are provided", () => {
  expect(calculator.multiply(1)).toBe(Error);
});

it("returns error if more than 2 arguments are provided", () => {
  expect(calculator.multiply(1, 2, 3)).toBe(Error);
});

it("multiplies 2 negative values", () => {
  expect(calculator.multiply(-3, -2)).toBe(6);
});
