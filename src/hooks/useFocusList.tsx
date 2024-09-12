import { useState } from "react";
import { ISpellingList } from "../interfaces/ISpellingList";

export const useFocusList = () => {
  const [focusedList, setFocusedList] = useState<ISpellingList | undefined>();

  return {
    focusedList,
    setFocusedList,
  };
};
