/** @format */

import { Delete } from "@mui/icons-material";
import { IconButton, ListItem, ListItemIcon, Typography } from "@mui/material";
import { IWordList } from "../../interfaces/IWordList";

export const WordList: React.FC<IWordList> = ({ words, handleDeleteWord }) =>
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
