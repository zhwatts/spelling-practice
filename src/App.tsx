import { Grid2 as Grid } from "@mui/material";
import { useEffect, useState } from "react";
import WordList from "./components/lists/WordList";
import BrandedHeader from "./components/BrandedHeader";
import DownloadGameButton from "./components/buttons/DownloadGameButton";
import GlobalFooter from "./components/GlobalFooter";
import ListContent from "./pages/ListContent";
import { useSpellingListsContext } from "./context/spellingContext";
import { ISpellingList } from "./interfaces/ISpellingList";

const App = () => {
  const { spellingLists, addSpellingList } = useSpellingListsContext();
  const [focusedList, setFocusedList] = useState<ISpellingList>();
  const [checkedLists, setCheckedLists] = useState<ISpellingList[]>([]);

  useEffect(() => {
    if (spellingLists.length > 0) {
      setFocusedList(spellingLists[0]);
      setCheckedLists([spellingLists[0]]);
    }
  }, [spellingLists]);

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
