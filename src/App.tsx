import {
  Box,
  Button,
  Grid2 as Grid,
  Paper,
  Switch,
  Typography,
  useColorScheme,
} from "@mui/material";

const App = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const darkMode: boolean = !(mode === "light");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "paper",
        }}
      >
        <Grid size={5} mt={8}>
          <Typography component="h1" variant="h4" color="success">
            Spell_ing Pract_ce
          </Typography>

          <Switch
            color="secondary"
            checked={darkMode}
            onClick={() => (darkMode ? setMode("light") : setMode("dark"))}
          />
        </Grid>
        <Grid size={7} mt={8}>
          Right Section
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
