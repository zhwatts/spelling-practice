/** @format */

import { useState, useEffect } from "react";
import { ISpellingList } from "@/interfaces/ISpellingList";
import { placeHolderList } from "@/utitility/placeHolderList";

export function useSpellingLists() {
  const [spellingLists, setSpellingLists] = useState<ISpellingList[]>([]);
  const [isListNew, setIsListNew] = useState<boolean>(false);

  useEffect(() => {
    const storedLists = localStorage.getItem("spellingLists");

    if (!storedLists) {
      const placeholderList: ISpellingList[] = [placeHolderList];

      localStorage.setItem("spellingLists", JSON.stringify(placeholderList));
      setSpellingLists(placeholderList);
    } else {
      setSpellingLists(JSON.parse(storedLists));
    }
  }, []);

  const updateLocalStorage = (lists: ISpellingList[]) => {
    localStorage.setItem("spellingLists", JSON.stringify(lists));
  };

  const addSpellingList = (newList: ISpellingList) => {
    setSpellingLists((prevLists) => {
      const updatedLists = [...prevLists, newList];
      updateLocalStorage(updatedLists);
      return updatedLists;
    });
  };

  const editSpellingList = (id: number, updatedList: ISpellingList) => {
    setSpellingLists((prevLists) => {
      const updatedLists = prevLists.map((list) => (list.id === id ? updatedList : list));

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
    isListNew,
    setIsListNew,
    spellingLists,
    addSpellingList,
    editSpellingList,
    deleteSpellingList,
  };
}
