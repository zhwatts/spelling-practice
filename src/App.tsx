/** @format */

import { useEffect } from "react";
import { Grid2 as Grid, Typography } from "@mui/material";

import BrandedHeader from "@/components/BrandedHeader";
import DownloadGameButton from "@/components/buttons/DownloadGameButton";
import GlobalFooter from "@/components/GlobalFooter";
import ListContent from "@/pages/ListContent";
import { useSpellingListsContext } from "@/context/spellingContext";
import SpellingLists from "@/components/lists/SpellingList";

const App = () => {
  const { spellingLists, focusedList, setFocusedList } = useSpellingListsContext();

  useEffect(() => {
    if (!focusedList && spellingLists.length > 0) {
      setFocusedList(spellingLists[0]);
    }
  }, [spellingLists, setFocusedList, focusedList]);

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
          <DownloadGameButton checkedListCount={0} />
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
