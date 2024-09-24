/** @format */

export const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const jumbleWord = (word: string): string => {
  if (word.length <= 1) return word; // no need to shuffle single character
  const letters = word.split("");
  return shuffleArray(letters).join("");
};
