import { Button, List, ListItem, Paper } from "@mui/material";
import { WordListItem } from "../WordListItems";
import { IWordList } from "../../../interfaces/IWordList";
import { Dispatch, SetStateAction } from "react";

export function WordList({
  handleCreateList,
  wordLists,
  focusedList,
  checkedLists,
  setFocusedList,
  handleCheckedList,
}: {
  handleCreateList: VoidFunction;
  wordLists: IWordList[];
  focusedList?: IWordList;
  checkedLists: IWordList[];
  setFocusedList: Dispatch<SetStateAction<IWordList | undefined>>;
  handleCheckedList: (list: IWordList) => void;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
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

        {wordLists.map((list) => (
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
