/** @format */

import React, { createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";

import { useSpellingLists, useFocusList } from "@/hooks";
import { ISpellingList } from "@/interfaces/ISpellingList";

interface SpellingListsContextType {
  spellingLists: ISpellingList[];
  focusedList: ISpellingList | undefined;
  addSpellingList: (newList: ISpellingList) => void;
  editSpellingList: (id: number, updatedList: ISpellingList) => void;
  deleteSpellingList: (id: number) => void;
  setFocusedList: Dispatch<SetStateAction<ISpellingList | undefined>>;
}

const SpellingListsContext = createContext<SpellingListsContextType | undefined>(undefined);

export const SpellingListsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { spellingLists, addSpellingList, editSpellingList, deleteSpellingList } = useSpellingLists();

  const { focusedList, setFocusedList } = useFocusList();

  return (
    <SpellingListsContext.Provider
      value={{
        spellingLists,
        addSpellingList,
        editSpellingList,
        deleteSpellingList,
        focusedList,
        setFocusedList,
      }}
    >
      {children}
    </SpellingListsContext.Provider>
  );
};

export const useSpellingListsContext = () => {
  const context = useContext(SpellingListsContext);
  if (context === undefined) {
    throw new Error("useSpellingListsContext must be used within a SpellingListsProvider");
  }
  return context;
};
