/** @format */

export type IWordList = {
  words: string[];
  handleDeleteWord: ({ targetWord }: { targetWord: string }) => void;
};
