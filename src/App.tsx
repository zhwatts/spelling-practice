/** @format */

import { Grid2 as Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BrandedHeader from "./components/BrandedHeader";
import DownloadGameButton from "./components/buttons/DownloadGameButton";
import GlobalFooter from "./components/GlobalFooter";
import ListContent from "./pages/ListContent";
import { useSpellingListsContext } from "./context/spellingContext";
import { ISpellingList } from "./interfaces/ISpellingList";
import SpellingLists from "./components/lists/WordList";

const App = () => {
  const { spellingLists, addSpellingList, focusedList, setFocusedList } =
    useSpellingListsContext();
  const [checkedLists, setCheckedLists] = useState<ISpellingList[]>([]);

  useEffect(() => {
    if (!focusedList && spellingLists.length > 0) {
      setFocusedList(spellingLists[0]);
      setCheckedLists([spellingLists[0]]);
    }
  }, [spellingLists, setFocusedList, focusedList]);

  const handleCheckedList = (list: ISpellingList) => {
    const itemChecked = checkedLists.includes(list);

    if (itemChecked) {
      setCheckedLists(
        checkedLists.filter((checkedList) => checkedList !== list)
      );
    } else {
      setCheckedLists([...checkedLists, list]);
    }
  };

  const handleCreateList = () =>
    addSpellingList({
      id: spellingLists.length + 1,
      title: "A New List...",
      words: [],
    });

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      sx={{
        maxWidth: "1440px",
        margin: "0px auto",
        minHeight: "100%",
        px: "50px",
      }}
    >
      <Grid container size={12} flexGrow={2} pt={8}>
        <Grid container direction="column" spacing={1}>
          <BrandedHeader />

          <SpellingLists
            handleCreateList={handleCreateList}
            focusedList={focusedList}
            checkedLists={checkedLists}
            setFocusedList={setFocusedList}
            handleCheckedList={handleCheckedList}
          />

          <DownloadGameButton checkedListCount={Number(checkedLists.length)} />
        </Grid>

        <ListContent />
      </Grid>
      <Grid container size={12}>
        <GlobalFooter />
      </Grid>
    </Grid>
  );
};

export default App;
