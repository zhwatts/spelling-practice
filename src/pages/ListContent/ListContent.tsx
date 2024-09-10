import {
  Grid2 as Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { IWordList } from "../../interfaces/IWordList";
import { AddCircleOutline } from "@mui/icons-material";

export function ListContent({ focusedList }: { focusedList?: IWordList }) {
  return (
    <Grid container direction="column" flexGrow={2} spacing={1}>
      <Typography
        ml="34px"
        component="h1"
        variant="h4"
        color="primary.contrastText"
      >
        {focusedList ? focusedList.title : "Create a new list"}
      </Typography>

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
