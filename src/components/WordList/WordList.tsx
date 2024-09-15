/** @format */

import { Delete } from "@mui/icons-material";
import { IconButton, ListItem, ListItemIcon } from "@mui/material";

import { IWordList } from "@/interfaces/IWordList";
import { EditableWord } from "@/components/TextInputs/EditableWord";

export const WordList: React.FC<IWordList> = ({ words, handleDeleteWord }) =>
  words.map((word, key) => (
    <ListItem
      key={`${key}-${word}`}
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

        <EditableWord targetWord={word} />
      </ListItemIcon>
    </ListItem>
  ));
