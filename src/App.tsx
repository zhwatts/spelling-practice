/** @format */

import { useEffect } from "react";
import { Grid2 as Grid, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

import BrandedHeader from "@/components/BrandedHeader";
import DownloadGameButton from "@/components/buttons/DownloadGameButton";
import GlobalFooter from "@/components/GlobalFooter";
import ListContent from "@/pages/ListContent";
import { useSpellingListsContext } from "@/context/spellingContext";
import SpellingLists from "@/components/lists/SpellingList";
import { IGameType } from "./interfaces/IGameType";

const App = () => {
  const { spellingLists, focusedList, setFocusedList, checkedLists, handleCheckedList, gameType, setGameType } =
    useSpellingListsContext();

  useEffect(() => {
    if (!focusedList && spellingLists.length > 0) {
      setFocusedList(spellingLists[0]);
    }
  }, [spellingLists, setFocusedList, focusedList]);

  useEffect(() => {
    if (focusedList && checkedLists.length < 1) {
      handleCheckedList(spellingLists[0]);
    }
  }, [focusedList]);

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
          <SpellingLists />

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gameType}
            label="Game Type"
            onChange={(event: SelectChangeEvent) => setGameType(event.target.value as IGameType)}
          >
            <MenuItem value={"wordjumble"}>Word Jumble</MenuItem>
            <MenuItem value={"missingletter"}>Missing Letter</MenuItem>
          </Select>

          <DownloadGameButton checkedListCount={checkedLists.length} />
        </Grid>

        {!!focusedList ? <ListContent /> : <Typography variant="h6">To get started, create a list!</Typography>}
      </Grid>
      <Grid container size={12}>
        <GlobalFooter />
      </Grid>
    </Grid>
  );
};

export default App;
