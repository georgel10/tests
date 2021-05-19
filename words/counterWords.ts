interface Words {
  [word: string]: number;
}
const counterWords = (text: string): Words => {
  const words: Words = {};
  const splitText: string[] = text.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(' ');
  splitText.map((word: string) => words[word] = words[word] ? words[word] + 1 : 1);
  Object.keys(words).map(key => console.log(key, words[key]));
  return words;
}

export default counterWords;
