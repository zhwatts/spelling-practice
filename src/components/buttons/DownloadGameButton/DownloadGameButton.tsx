/** @format */

import { Downloading } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

export function DownloadGameButton({ checkedListCount }: { checkedListCount: number }) {
  return (
    <Button
      disableElevation
      variant="contained"
      color="secondary"
      disabled={checkedListCount <= 0}
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
