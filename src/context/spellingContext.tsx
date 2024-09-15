/** @format */

import React, { createContext, useContext, ReactNode } from "react";

import { useSpellingLists, useFocusList } from "@/hooks";
import { ISpellingListsContext } from "@/interfaces/ISpellingListsContext";

const SpellingListsContext = createContext<ISpellingListsContext | undefined>(undefined);

export const SpellingListsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isListNew, setIsListNew, spellingLists, addSpellingList, editSpellingList, deleteSpellingList } =
    useSpellingLists();

  const { focusedList, setFocusedList } = useFocusList();

  return (
    <SpellingListsContext.Provider
      value={{
        isListNew,
        setIsListNew,
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
