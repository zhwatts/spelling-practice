/** @format */

import { Button, List, ListItem, Paper } from "@mui/material";
import { useState } from "react";
import useSpellingListsContext from "@/context";
import { ISpellingList } from "@/interfaces/ISpellingList";
import { SpellingList } from "@/components/lists/SpellingListItems";

export function SpellingLists() {
  const { isListNew, setIsListNew, spellingLists, addSpellingList, focusedList, setFocusedList } =
    useSpellingListsContext();
  const [checkedLists, setCheckedLists] = useState<ISpellingList[]>([]);

  const handleCheckedList = (list: ISpellingList) => {
    const itemChecked = checkedLists.includes(list);

    if (itemChecked) {
      setCheckedLists(checkedLists.filter((checkedList) => checkedList !== list));
    } else {
      setCheckedLists([...checkedLists, list]);
    }
  };

  const handleCreateList = () => {
    const newList = {
      id: spellingLists.length + 1,
      title: "A New List...",
      words: [],
    };

    if (!isListNew) {
      setIsListNew(true);
    }

    addSpellingList(newList);
    setFocusedList(newList);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "450px",
        borderColor: "primary.light",
        borderStyle: "solid",
        borderWidth: "1px",
        p: "10px 0",
      }}
    >
      <List sx={{ p: 2, pt: 0 }}>
        <ListItem sx={{ p: 0 }} key="create-btn">
          <Button fullWidth disableElevation disableRipple onClick={handleCreateList}>
            Click to create a list
          </Button>
        </ListItem>

        {spellingLists.map((list) => (
          <SpellingList
            key={list.id}
            id={list.id}
            selected={focusedList && focusedList.id === list.id}
            checked={checkedLists.includes(list)}
            primaryAction={() => setFocusedList(list)}
            secondaryAction={() => handleCheckedList(list)}
          >
            {list.title}
          </SpellingList>
        ))}
      </List>
    </Paper>
  );
}
