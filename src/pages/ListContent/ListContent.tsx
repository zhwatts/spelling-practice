/** @format */

import { Grid2 as Grid, List, ListItem, ListItemText } from "@mui/material";

import SpellingListTitle from "@/components/SpellingListTitle";
import SpellingWordInput from "@/components/TextInputs/SpellingWordInput";
import useSpellingListsContext from "@/context";
import WordList from "@/components/WordList";

export function ListContent() {
  const { focusedList, setFocusedList, editSpellingList } = useSpellingListsContext();

  const handleDeleteWord = ({ targetWord }: { targetWord: string }) => {
    if (!focusedList) {
      return;
    }

    const updatedWordList = focusedList?.words.filter((word: string) => word !== targetWord);
    const updatedFocusedList = { ...focusedList, words: updatedWordList };

    editSpellingList(focusedList.id, updatedFocusedList);
    setFocusedList(updatedFocusedList);
  };

  return (
    <Grid container direction="column" flexGrow={2} spacing={1}>
      <SpellingListTitle listId={focusedList?.id ?? 1} />

      <SpellingWordInput />

      <List sx={{ px: "6px" }}>
        {focusedList?.words && focusedList.words.length > 0 ? (
          <WordList words={focusedList.words} handleDeleteWord={handleDeleteWord} />
        ) : (
          <ListItem key="placeholder-word">
            {!!focusedList ? (
              <ListItemText>
                Enter a word above, to add it to the list <strong>{focusedList?.title}</strong>
              </ListItemText>
            ) : (
              <ListItemText>Please create a list before adding words</ListItemText>
            )}
          </ListItem>
        )}
      </List>
    </Grid>
  );
}
