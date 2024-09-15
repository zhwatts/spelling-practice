/** @format */

import { Grid2 as Grid, Stack, Switch, Typography, useColorScheme } from "@mui/material";

export function GlobalFooter() {
  const { mode, setMode } = useColorScheme();
  const darkMode: boolean = !(mode === "light");

  if (!mode) {
    return null;
  }

  return (
    <Grid size={12}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center", justifyContent: "center" }}>
        <Typography>light</Typography>
        <Switch color="secondary" checked={darkMode} onClick={() => (darkMode ? setMode("light") : setMode("dark"))} />
        <Typography>dark</Typography>
      </Stack>
    </Grid>
  );
}
