/** @format */

import { Delete } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  TextField,
  Typography,
} from "@mui/material";
import { IWordList } from "../../interfaces/IWordList";
import { useState } from "react";
import useSpellingListsContext from "../../context";

const EditableWord = ({ targetWord }: { targetWord: string }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { focusedList, editSpellingList, setFocusedList } =
    useSpellingListsContext();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { targetWord: targetWord ?? "" },
  });

  const onSubmit = (data: { targetWord: string }) => {
    if (!focusedList) return;

    if (data.targetWord.trim() === "") {
      reset({ targetWord });
    }

    const updatedWordsList = focusedList.words.map((word) =>
      word === targetWord ? data.targetWord : word
    );

    const updatedFocusedList = {
      ...focusedList,
      words: updatedWordsList,
    };

    editSpellingList(focusedList.id, {
      ...focusedList,
      words: updatedWordsList,
    });

    setFocusedList(updatedFocusedList);

    setEditMode(false);
  };

  return editMode ? (
    <form onBlur={handleSubmit(onSubmit)} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="targetWord"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            autoFocus
            error={!!errors.targetWord}
            variant="standard"
            margin="dense"
            sx={{ padding: 0 }}
            slotProps={{
              htmlInput: {
                sx: { padding: 0, margin: 0, height: "1.5em" },
              },
              input: {
                disableUnderline: true,
                sx: {
                  fontSize: "1.5rem",
                  borderBottom: 0,
                  fontWeight: "bold",
                  margin: 0,
                  padding: 0,
                  background: "#f0f0f0",
                  lineHeight: 1.5,
                },
              },
            }}
          />
        )}
      />
    </form>
  ) : (
    <Typography
      variant="h5"
      fontWeight="bold"
      onClick={() => setEditMode(!editMode)}
      sx={{
        cursor: "pointer",
        lineHeight: 1.5,
      }}
    >
      {targetWord}
    </Typography>
  );
};

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

        <EditableWord targetWord={word} />
      </ListItemIcon>
    </ListItem>
  ));
