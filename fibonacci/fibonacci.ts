const getFibonacci = (num: number): number => {
  if (num < 1) return 0;
  if (num === 1) return 1;

  return getFibonacci(num - 1) + getFibonacci(num - 2);
}

export default getFibonacci;
