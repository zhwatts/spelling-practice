/** @format */

import { Button, List, ListItem, Paper } from "@mui/material";
import useSpellingListsContext from "@/context";
import { ISpellingList } from "@/interfaces/ISpellingList";
import { SpellingList } from "@/components/lists/SpellingListItems";

export function SpellingLists() {
  const {
    isListNew,
    setIsListNew,
    spellingLists,
    addSpellingList,
    deleteSpellingList,
    focusedList,
    setFocusedList,
    checkedLists,
    handleCheckedList,
  } = useSpellingListsContext();

  const handleCreateList = () => {
    const newListId = spellingLists.length > 0 ? spellingLists[spellingLists.length - 1].id + 1 : 0;
    // const newListId = spellingLists.length > 0 ? spellingLists.at(-1).id : 0;

    const newList = {
      id: newListId,
      title: "A New List...",
      words: [],
    };

    if (!isListNew) {
      setIsListNew(true);
    }

    addSpellingList(newList);
    setFocusedList(newList);
  };

  const handleDeleteList = (list: ISpellingList) => {
    const remainingLists = deleteSpellingList(list.id);

    if (checkedLists.includes(list.id)) {
      handleCheckedList(list);
    }

    if (list.id === focusedList?.id) {
      setFocusedList(undefined);
    }

    if (remainingLists.length > 0) {
      setFocusedList(remainingLists.at(-1));
    }
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
      <List sx={{ px: 2 }}>
        <ListItem sx={{ p: 0 }} key="create-btn">
          <Button fullWidth disableElevation onClick={handleCreateList}>
            Click to create a list
          </Button>
        </ListItem>

        {spellingLists.map((list) => (
          <SpellingList
            key={list.id}
            id={list.id}
            selected={focusedList && focusedList.id === list.id}
            checked={checkedLists.includes(list.id)}
            primaryAction={() => setFocusedList(list)}
            secondaryAction={() => handleCheckedList(list)}
            deleteList={() => handleDeleteList(list)}
          >
            {list.title}
          </SpellingList>
        ))}
      </List>
    </Paper>
  );
}
