/** @format */

import { createTheme } from "@mui/material";
import { darkTheme as dark } from "./darkTheme";
import { lightTheme as light } from "./lightTheme";

const theme = createTheme({
  colorSchemes: {
    dark,
    light,
  },
  components: {},
  typography: {},
});

export default theme;
