import { PaletteMode } from "@mui/material";

export const lightTheme = {
  palette: {
    mode: "light" as PaletteMode,

    primary: {
      main: "#45DFB1",
      light: "#80ED99",
      dark: "#2096A9",
      contrastText: "#263A56",
    },

    secondary: {
      main: "#EAF162",
      light: "#EAF162",
      dark: "#D0C872",
      contrastText: "#294046",
    },

    background: {
      default: "#fff",
      paper: "#ECFDF0",
    },

    text: {
      primary: "#2B3233",
      secondary: "#57787D",
      disabled: "#000",
    },
  },
};
