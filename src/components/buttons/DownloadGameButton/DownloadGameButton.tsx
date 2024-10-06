/** @format */

import useSpellingListsContext from "@/context";
import { IGameType } from "@/interfaces/IGameType";
import { MissingLetter, WordJumble } from "@/pdfTemplates";

import { Downloading } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { pdf } from "@react-pdf/renderer";

export function DownloadGameButton({ checkedListCount }: { checkedListCount: number }) {
  const { gameType, focusedList } = useSpellingListsContext();

  const renderGame = async () => {
    if (!focusedList) return alert("Must select at least one list");

    let doc;

    switch (gameType) {
      case IGameType.MissingLetter:
        doc = <MissingLetter focusedList={focusedList} />;
        break;
      default:
        doc = <WordJumble focusedList={focusedList} />;
        break;
    }

    const pdfInstance = pdf(doc);
    const blob = await pdfInstance.toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `${focusedList?.title}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url); // Release the object URL to free up memory
  };

  return (
    <Button
      disableElevation
      variant="contained"
      color="secondary"
      disabled={checkedListCount <= 0}
      onClick={renderGame}
      sx={{ display: "flex", p: 0 }}
    >
      <Stack direction="row" flexGrow={2} py={2} spacing={1} display="flex" justifyContent="center" alignItems="center">
        <Downloading />
        <Typography variant="body2">Create Game From</Typography>
      </Stack>

      <Divider orientation="vertical" flexItem sx={{ height: "100%" }} />
      <Box p={1} py={2} minWidth="100px">
        {checkedListCount} List{checkedListCount > 1 && "s"}
      </Box>
    </Button>
  );
}
