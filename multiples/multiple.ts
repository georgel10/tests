const multiples = (LIMIT: number) => {
  for (let index = 1; index <= LIMIT; index++) {
    let display: string | number = index;

    if (index % 3 === 0 && index % 5 === 0) {
      display = 'fizz buzz'
    } else if (index % 3 == 0) {
      display = 'fizz';
    } else if (index % 5 == 0) {
      display = 'buzz';
    }
    console.log(display);
  }
}

export default multiples;
