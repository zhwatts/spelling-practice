/** @format */

import { ISpellingList } from "@/interfaces/ISpellingList";
import { useState } from "react";

export const useCheckedLists = () => {
  const [checkedLists, setCheckedLists] = useState<number[]>([]);

  const handleCheckedList = (list: ISpellingList) => {
    const isListAlreadyChecked = checkedLists.includes(list.id);

    //handle check
    if (!isListAlreadyChecked) {
      setCheckedLists([...checkedLists, list.id]);
    }

    //handle uncheck
    if (isListAlreadyChecked) {
      setCheckedLists(checkedLists.filter((checkedId) => checkedId !== list.id));
    }
  };

  return {
    checkedLists,
    handleCheckedList,
  };
};
