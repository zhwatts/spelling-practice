/** @format */

import {
  Grid2 as Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import SpellingListTitle from "../../components/SpellingListTitle";
import SpellingWordInput from "../../components/textinputs/SpellingWordInput";
import { Delete } from "@mui/icons-material";
import useSpellingListsContext from "../../context";
import { IWordList } from "../../interfaces/IWordList";

const WordList: React.FC<IWordList> = ({ words, handleDeleteWord }) =>
  words.map((word, key) => (
    <ListItem
      key={key}
      sx={{
        p: 0,
        py: 1,
        borderBottom: "1px dashed",
        borderColor: "primary.main",
        ":last-child": {
          borderBottom: "none",
        },
      }}
    >
      <ListItemIcon>
        <IconButton onClick={() => handleDeleteWord({ targetWord: word })}>
          <Delete color={"primary"} />
        </IconButton>
      </ListItemIcon>

      <Typography variant="h5" fontWeight="bold">
        {word}
      </Typography>
    </ListItem>
  ));

export function ListContent() {
  const { focusedList, setFocusedList, editSpellingList } =
    useSpellingListsContext();

  const handleDeleteWord = ({ targetWord }: { targetWord: string }) => {
    if (focusedList) {
      const updatedWordList = focusedList?.words.filter(
        (word: string) => word !== targetWord
      );

      const updatedFocusedList = { ...focusedList, words: updatedWordList };

      editSpellingList(focusedList.id, updatedFocusedList);
      setFocusedList(updatedFocusedList);
    }
  };

  return (
    <Grid container direction="column" flexGrow={2} spacing={1}>
      <SpellingListTitle listId={focusedList?.id ?? 1} />

      <SpellingWordInput />

      <List sx={{ px: "6px" }}>
        {focusedList?.words && focusedList.words.length > 0 ? (
          <WordList
            words={focusedList.words}
            handleDeleteWord={handleDeleteWord}
          />
        ) : (
          <ListItem>
            <ListItemText>Add a word above!</ListItemText>
          </ListItem>
        )}
      </List>
    </Grid>
  );
}
