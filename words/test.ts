import counterWords from "./counterWords";

describe('Counter Words', () => {
  test('Counter Words Equal', () => {
    const text = `I am a developer, are you a developer?`;
    counterWords(text);
    expect(counterWords(text)).toEqual({
      i: 1,
      am: 1,
      a: 2,
      developer: 2,
      are: 1,
      you: 1
    });
  });

  test('Counter Words NOT Equal', () => {
    const text = `I am not a developer, I am a doctor`;
    counterWords(text);
    expect(counterWords(text)).not.toEqual({
      i: 1,
      am: 1,
      a: 2,
      developer: 2,
      are: 1,
      you: 1
    });
  });
})
  