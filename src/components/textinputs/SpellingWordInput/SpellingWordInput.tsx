import { AddCircleOutline } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";

export function SpellingWordInput() {
  return (
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
  );
}
