import { createTheme } from "@mui/material";
import { dark } from "./darkTheme";
import { light } from "./lightTheme";

const theme = createTheme({
  components: {},

  colorSchemes: {
    dark,
    light,
  },
});

export default theme;
