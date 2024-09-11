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
          words: ["Annoy", "Avoid", "Thousand"],
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
  };

  const addSpellingList = (newList: SpellingList) => {
    setSpellingLists((prevLists) => {
      const updatedLists = [...prevLists, newList];
      updateLocalStorage(updatedLists);
      return updatedLists;
    });
  };

  const editSpellingList = (id: number, updatedList: SpellingList) => {
    setSpellingLists((prevLists) => {
      const updatedLists = prevLists.map((list) =>
        list.id === id ? updatedList : list
      );

      updateLocalStorage(updatedLists);
      return updatedLists;
    });
  };

  const deleteSpellingList = (id: number) => {
    setSpellingLists((prevLists) => {
      const updatedLists = prevLists.filter((list) => list.id !== id);
      updateLocalStorage(updatedLists);
      return updatedLists;
    });
  };

  return {
    spellingLists,
    addSpellingList,
    editSpellingList,
    deleteSpellingList,
  };
}
