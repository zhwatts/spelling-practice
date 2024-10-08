/** @format */

import { TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useSpellingListsContext from "@/context";
import { isInputEmpty } from "@/utitility";

interface EditableSpellingListTitleProps {
  listId: number;
}

export const SpellingListTitle: React.FC<EditableSpellingListTitleProps> = ({ listId }) => {
  const { spellingLists, editSpellingList, setFocusedList, isListNew, setIsListNew } = useSpellingListsContext();

  const selectedList = spellingLists.find((list) => list.id === listId);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!!isListNew) {
      setIsEditing(isListNew);
    }
  }, [isListNew]);

  useEffect(() => {
    if (isListNew && isEditing && inputRef.current) {
      inputRef.current.select();
    }
  }, [isEditing]);

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
      <Typography ml="34px" component="h1" variant="h4" color="primary.contrastText">
        Spelling List Not Found
      </Typography>
    );
  }

  const onSubmit = (data: { title: string }) => {
    if (isInputEmpty(data.title)) {
      reset({ title: selectedList.title });
    } else {
      const updatedList = { ...selectedList, title: data.title };
      editSpellingList(updatedList.id, updatedList);
      setFocusedList(updatedList);
    }

    setIsListNew(false);
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
                inputRef={(e) => {
                  field.ref(e);
                  inputRef.current = e;
                }}
                slotProps={{
                  input: {
                    sx: {
                      fontSize: "2.125rem",
                      padding: 0,
                      my: "-5px",
                      mb: "2px",
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
          mb="10px"
          component="h1"
          variant="h4"
          color="primary.contrastText"
          onClick={() => setIsEditing(true)}
          sx={{
            cursor: "pointer",
            maxWidth: "725px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {selectedList.title}
        </Typography>
      )}
    </div>
  );
};
