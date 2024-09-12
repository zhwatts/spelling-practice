import { Button, List, ListItem, Paper } from "@mui/material";
import { WordListItem } from "../WordListItems";
import { Dispatch, SetStateAction } from "react";
import useSpellingListsContext from "../../../context";
import { ISpellingList } from "../../../interfaces/ISpellingList";

export function WordList({
  handleCreateList,
  focusedList,
  checkedLists,
  setFocusedList,
  handleCheckedList,
}: {
  handleCreateList: VoidFunction;
  focusedList?: ISpellingList;
  checkedLists: ISpellingList[];
  setFocusedList: Dispatch<SetStateAction<ISpellingList | undefined>>;
  handleCheckedList: (list: ISpellingList) => void;
}) {
  const { spellingLists } = useSpellingListsContext();

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
          <Button
            fullWidth
            disableElevation
            disableRipple
            onClick={handleCreateList}
          >
            Click to create a list
          </Button>
        </ListItem>

        {spellingLists.map((list) => (
          <WordListItem
            key={list.id}
            id={list.id}
            selected={focusedList && focusedList.id === list.id}
            checked={checkedLists.includes(list)}
            primaryAction={() => setFocusedList(list)}
            secondaryAction={() => handleCheckedList(list)}
          >
            {list.title}
          </WordListItem>
        ))}
      </List>
    </Paper>
  );
}
