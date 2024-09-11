import React, { createContext, useContext, ReactNode } from "react";
import useSpellingLists from "../hooks";
import { ISpellingList } from "../interfaces/ISpellingList";

interface SpellingListsContextType {
  spellingLists: ISpellingList[];
  addSpellingList: (newList: ISpellingList) => void;
  editSpellingList: (id: number, updatedList: ISpellingList) => void;
  deleteSpellingList: (id: number) => void;
}

const SpellingListsContext = createContext<
  SpellingListsContextType | undefined
>(undefined);

// Create a provider component
export const SpellingListsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    spellingLists,
    addSpellingList,
    editSpellingList,
    deleteSpellingList,
  } = useSpellingLists();

  return (
    <SpellingListsContext.Provider
      value={{
        spellingLists,
        addSpellingList,
        editSpellingList,
        deleteSpellingList,
      }}
    >
      {children}
    </SpellingListsContext.Provider>
  );
};

// Custom hook to use the SpellingListsContext
export const useSpellingListsContext = () => {
  const context = useContext(SpellingListsContext);
  if (context === undefined) {
    throw new Error(
      "useSpellingListsContext must be used within a SpellingListsProvider"
    );
  }
  return context;
};
