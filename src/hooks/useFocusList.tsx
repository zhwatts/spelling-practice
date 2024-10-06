/** @format */

import { useState } from "react";
import { ISpellingList } from "@/interfaces/ISpellingList";
import { IGameType } from "@/interfaces/IGameType";

export const useFocusList = () => {
  const [focusedList, setFocusedList] = useState<ISpellingList | undefined>();
  const [gameType, setGameType] = useState<IGameType>(IGameType.MissingLetter);

  return {
    focusedList,
    setFocusedList,
    gameType,
    setGameType,
  };
};
