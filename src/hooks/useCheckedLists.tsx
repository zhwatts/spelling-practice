/** @format */

import { ISpellingList } from "@/interfaces/ISpellingList";
import { useEffect, useState } from "react";

export const useCheckedLists = () => {
  const [checkedLists, setCheckedLists] = useState<number[]>([]);

  useEffect(() => {
    const checkedListsStore = localStorage.getItem("checkedItems");

    if (!checkedListsStore) {
      localStorage.setItem("checkedListsStore", JSON.stringify([]));
    } else {
      setCheckedLists(JSON.parse(checkedListsStore));
    }
  }, []);

  const handleCheckedList = (list: ISpellingList) => {
    const isListAlreadyChecked = checkedLists.includes(list.id);

    const updateLocalStorage = (listIds: number[]) => {
      localStorage.setItem("checkedItems", JSON.stringify(listIds));
    };

    const updatedItems = isListAlreadyChecked
      ? checkedLists.filter((checkedId) => checkedId !== list.id)
      : [...checkedLists, list.id];

    setCheckedLists(updatedItems);
    updateLocalStorage(updatedItems);
  };

  return {
    checkedLists,
    handleCheckedList,
  };
};
