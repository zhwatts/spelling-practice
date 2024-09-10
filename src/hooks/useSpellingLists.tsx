import { useState, useEffect } from "react";

interface SpellingList {
  id: number;
  title: string;
  words: string[];
}

export function useSpellingLists() {
  const [spellingLists, setSpellingLists] = useState<SpellingList[]>([]);

  useEffect(() => {
    const storedLists = localStorage.getItem("spellingLists");

    if (!storedLists) {
      const placeholderList: SpellingList[] = [
        {
          id: 1,
          title: "My First Spelling List",
          words: ["Example", "Placeholder", "Words"],
        },
      ];

      localStorage.setItem("spellingLists", JSON.stringify(placeholderList));
      setSpellingLists(placeholderList);
    } else {
      setSpellingLists(JSON.parse(storedLists));
    }
  }, []);

  const updateLocalStorage = (lists: SpellingList[]) => {
    localStorage.setItem("spellingLists", JSON.stringify(lists));
    setSpellingLists(lists);
  };

  const addSpellingList = (newList: SpellingList) => {
    const updatedLists = [...spellingLists, newList];
    updateLocalStorage(updatedLists);
  };

  const editSpellingList = (id: number, updatedList: SpellingList) => {
    const updatedLists = spellingLists.map((list) =>
      list.id === id ? updatedList : list
    );
    updateLocalStorage(updatedLists);
  };

  const deleteSpellingList = (id: number) => {
    const updatedLists = spellingLists.filter((list) => list.id !== id);
    updateLocalStorage(updatedLists);
  };

  return {
    spellingLists,
    addSpellingList,
    editSpellingList,
    deleteSpellingList,
  };
}
