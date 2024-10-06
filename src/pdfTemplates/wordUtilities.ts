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

export function dropLettersFromWord(word: string): string {
  // Calculate the number of letters to replace (at least one letter should be removed)
  const numLettersToReplace = Math.max(Math.floor(word.length * 0.4), 1);

  // Create an array of unique indices where letters will be replaced
  const indicesToReplace: Set<number> = new Set();
  while (indicesToReplace.size < numLettersToReplace) {
    const randomIndex = Math.floor(Math.random() * word.length);
    indicesToReplace.add(randomIndex);
  }

  const result = word
    .split("")
    .map((char, index) => (indicesToReplace.has(index) ? "_" : char))
    .join("");

  return result;
}
