import { createTheme } from "@mui/material";

export const dark = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#428F99",
      paper: "#0000ff",
    },

    text: {
      primary: "#fff", //text
      secondary: "#ff0000",
    },

    success: {
      light: "#0000ff",
      main: "#45bfb1",
      dark: "#000",
    },

    primary: {
      main: "#333",
      dark: "#444",
      contrastText: "#ffff00",
    },

    secondary: {
      light: "#fff",
      main: "#80ED99",
      dark: "#000",
    },
  },
});
