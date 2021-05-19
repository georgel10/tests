import getFibonacci from "./fibonacci";

describe('Evaluate Fibonacci', () => {
  test('Fibonacci of 1', () => {
    expect(getFibonacci(1)).toEqual(1);
  });

  test('Fibonacci of 5', () => {
    expect(getFibonacci(5)).toEqual(5);
  });

  test('Fibonacci of 13', () => {
    expect(getFibonacci(13)).toEqual(233);
  });

  test('Fibonacci of 3 !== 5', () => {
    expect(getFibonacci(3)).not.toEqual(5);
  });
});
