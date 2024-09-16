/** @format */

import { Dispatch, SetStateAction } from "react";
import { ISpellingList } from "./ISpellingList";

export interface ISpellingListsContext {
  isListNew: boolean;
  spellingLists: ISpellingList[];
  focusedList: ISpellingList | undefined;
  addSpellingList: (newList: ISpellingList) => void;
  editSpellingList: (id: number, updatedList: ISpellingList) => void;
  deleteSpellingList: (id: number) => ISpellingList[];
  setFocusedList: Dispatch<SetStateAction<ISpellingList | undefined>>;
  setIsListNew: Dispatch<SetStateAction<boolean>>;
}
