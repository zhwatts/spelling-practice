import { Grid2 as Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { IWordList } from "./interfaces/IWordList";
import WordList from "./components/lists/WordList";
import BrandedHeader from "./components/BrandedHeader";
import DownloadGameButton from "./components/buttons/DownloadGameButton";
import GlobalFooter from "./components/GlobalFooter";
import ListContent from "./pages/ListContent";
import useSpellingLists from "./hooks";

const placeHolderWordList: IWordList = {
  id: 1,
  title: "My First Spelling List",
};

const App = () => {
  const { spellingLists, addSpellingList } = useSpellingLists();

  const [wordLists, setWordLists] = useState<IWordList[]>([]);
  const [focusedList, setFocusedList] = useState<IWordList>();
  const [checkedLists, setCheckedLists] = useState<IWordList[]>([]);

  useEffect(() => {
    setWordLists(spellingLists);

    if (spellingLists.length > 0) {
      setFocusedList(spellingLists[0]);
    }

    if (spellingLists.length > 0) {
      setCheckedLists([spellingLists[0]]);
    }

    if (spellingLists.length === 0) {
      setWordLists([placeHolderWordList]);
      setFocusedList(placeHolderWordList);
      setCheckedLists([placeHolderWordList]);
    }
  }, [spellingLists]);

  const handleCheckedList = (list: IWordList) => {
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
      id: wordLists.length + 1,
      title: "A New List...",
      words: [],
    });

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      sx={{ maxWidth: "1000px", margin: "0px auto", minHeight: "100%" }}
    >
      <Grid container size={12} flexGrow={2} pt={8}>
        <Grid
          container
          direction="column"
          spacing={1}
          sx={{ minWidth: "400px" }}
        >
          <BrandedHeader />

          <WordList
            handleCreateList={handleCreateList}
            wordLists={wordLists}
            focusedList={focusedList}
            checkedLists={checkedLists}
            setFocusedList={setFocusedList}
            handleCheckedList={handleCheckedList}
          />

          <DownloadGameButton checkedListCount={Number(checkedLists.length)} />
        </Grid>

        <ListContent focusedList={focusedList} />
      </Grid>

      <Grid container size={12}>
        <GlobalFooter />
      </Grid>
    </Grid>
  );
};

export default App;
