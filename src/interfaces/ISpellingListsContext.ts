/** @format */

import { Dispatch, SetStateAction } from "react";
import { ISpellingList } from "./ISpellingList";
import { IGameType } from "./IGameType";

export interface ISpellingListsContext {
  isListNew: boolean;
  spellingLists: ISpellingList[];
  focusedList: ISpellingList | undefined;
  addSpellingList: (newList: ISpellingList) => void;
  editSpellingList: (id: number, updatedList: ISpellingList) => void;
  deleteSpellingList: (id: number) => ISpellingList[];
  setFocusedList: Dispatch<SetStateAction<ISpellingList | undefined>>;
  setIsListNew: Dispatch<SetStateAction<boolean>>;
  checkedLists: number[];
  handleCheckedList: (list: ISpellingList) => void;
  gameType: IGameType;
  setGameType: Dispatch<SetStateAction<IGameType>>;
}
