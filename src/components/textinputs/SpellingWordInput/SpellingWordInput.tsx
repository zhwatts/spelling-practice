import { AddCircleOutline } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import useSpellingListsContext from "../../../context";
import { useFocusList } from "../../../hooks";

type FormValues = {
  word: string;
};

export function SpellingWordInput() {
  const { editSpellingList, focusedList } = useSpellingListsContext();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      word: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = ({ word }) => {
    if (focusedList && word.trim()) {
      const updatedWords = [...focusedList.words, word.trim()];

      editSpellingList(focusedList.id, {
        ...focusedList,
        words: updatedWords,
      });

      reset({ word: "" });
    }
  };

  // const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="word"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            autoFocus
            autoComplete="off"
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <IconButton size="large" type="submit">
                    <AddCircleOutline color="primary" fontSize="inherit" />
                  </IconButton>
                ),
                sx: {
                  borderRadius: "50px",
                  pl: "0px",
                },
              },
            }}
          />
        )}
      />
    </form>
  );
}
