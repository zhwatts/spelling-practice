import {
  Grid2 as Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { IWordList } from "../../interfaces/IWordList";
import { AddCircleOutline } from "@mui/icons-material";
import useSpellingLists from "../../hooks";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface EditableSpellingListTitleProps {
  listId: number;
}

const SpellingListTitle: React.FC<EditableSpellingListTitleProps> = ({
  listId,
}) => {
  const { spellingLists, editSpellingList } = useSpellingLists();
  const selectedList = spellingLists.find((list) => list.id === listId);
  const [isEditing, setIsEditing] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { title: selectedList?.title ?? "" },
  });

  useEffect(() => {
    if (selectedList) {
      reset({ title: selectedList.title });
    }
  }, [selectedList, reset]);

  if (!selectedList) {
    return (
      <Typography
        ml="34px"
        component="h1"
        variant="h4"
        color="primary.contrastText"
      >
        Spelling List Not Found
      </Typography>
    );
  }

  const onSubmit = (data: { title: string }) => {
    if (data.title.trim() === "") {
      reset({ title: selectedList.title });
    } else {
      editSpellingList(listId, { ...selectedList, title: data.title });
    }
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onBlur={handleSubmit(onSubmit)} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus
                variant="standard"
                fullWidth
                size="small"
                sx={{ p: 0, px: "34px", m: 0 }}
                slotProps={{
                  input: {
                    sx: {
                      fontSize: "2.125rem",
                      padding: 0,
                      my: "-5px",
                    },
                  },
                }}
                error={!!errors.title}
              />
            )}
          />
        </form>
      ) : (
        <Typography
          ml="34px"
          component="h1"
          variant="h4"
          color="primary.contrastText"
          onClick={() => setIsEditing(true)}
          sx={{ cursor: "pointer" }}
        >
          {selectedList.title}
        </Typography>
      )}
    </div>
  );
};

export function ListContent({ focusedList }: { focusedList?: IWordList }) {
  return (
    <Grid container direction="column" flexGrow={2} spacing={1}>
      <SpellingListTitle listId={focusedList?.id ?? 1} />

      <TextField
        fullWidth
        autoFocus
        autoComplete="off"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton size="large">
                <AddCircleOutline color="primary" fontSize="inherit" />
              </IconButton>
            ),
            sx: {
              borderRadius: "50px",
              p: 0,
              pl: "20px",
            },
          },
        }}
      />
    </Grid>
  );
}
