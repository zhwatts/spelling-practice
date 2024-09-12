import { Grid2 as Grid, List, ListItem, ListItemText } from "@mui/material";
import SpellingListTitle from "../../components/SpellingListTitle";
import SpellingWordInput from "../../components/textinputs/SpellingWordInput";
import { ISpellingList } from "../../interfaces/ISpellingList";

export function ListContent({ focusedList }: { focusedList?: ISpellingList }) {
  return (
    <Grid container direction="column" flexGrow={2} spacing={1}>
      <SpellingListTitle listId={focusedList?.id ?? 1} />

      <SpellingWordInput />

      <List sx={{ px: "35px" }}>
        {focusedList?.words.map((word, key) => (
          <ListItem
            key={key}
            sx={{ borderBottom: "1px dashed", borderColor: "primary.main" }}
          >
            <ListItemText>{word}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
