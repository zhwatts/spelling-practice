import { createTheme } from "@mui/material";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";

const theme = createTheme({
  colorSchemes: {
    dark: darkTheme,
    light: lightTheme,
  },

  components: {},

  typography: {},
});

export default theme;
