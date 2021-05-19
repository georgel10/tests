import multiples from "./multiple";

describe('Multiples of 3 or 5', () => {
  it('OK', () => {
    console.log = jest.fn();
    multiples(10);
    // The first argument of the first call to the function was 1
    expect(console.log.mock.calls[0][0]).toBe(1);

    // Not logs with 3 or 5 numbers
    expect(console.log).not.toHaveBeenCalledWith(3);
    expect(console.log).not.toHaveBeenCalledWith(5);

    // Exist 'fizz' and 'buzz'
    expect(console.log).toHaveBeenCalledWith('fizz');
    expect(console.log).toHaveBeenCalledWith('buzz');
  });
})
