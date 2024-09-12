import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./themes";
import App from "./App";
import { SpellingListsProvider } from "./context/spellingContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SpellingListsProvider>
        <App />
      </SpellingListsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
