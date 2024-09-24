/** @format */

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import theme from "@/themes";
import App from "@/App";
import { SpellingListsProvider, useSpellingListsContext } from "@/context/spellingContext";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import { DocumentProps, PDFViewer } from "@react-pdf/renderer";

import { placeHolderList } from "./utitility/placeHolderList";
import { WordJumble } from "./pdfTemplates";

const PDFDisplay = () => {
  const { listCount, gameType } = useParams();
  const { focusedList } = useSpellingListsContext();

  const defaultDocumentProps: DocumentProps = {
    pageMode: "useThumbs",
    language: "english",
    author: "Zach Watts",
    title: focusedList?.title ?? "",
  };

  if (gameType?.toLowerCase() === "wordjumble")
    return (
      <PDFViewer
        showToolbar
        width="100%"
        height="100%"
        children={
          <WordJumble
            documentProps={defaultDocumentProps}
            focusedList={{ ...placeHolderList, words: placeHolderList.words.slice(0, Number(listCount)) }}
          />
        }
      />
    );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pdf-designer/:gameType/:listCount",
    element: <PDFDisplay />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SpellingListsProvider>
        <RouterProvider router={router} />
      </SpellingListsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
