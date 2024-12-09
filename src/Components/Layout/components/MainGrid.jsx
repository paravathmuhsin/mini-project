import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "../internals/components/Copyright";
import { Outlet } from "react-router-dom";
import useAppContext from "../../AppContext/useAppContext";

export default function MainGrid() {
  const {
    context: { appTitle },
  } = useAppContext(); // {context: {…}, setContext: ƒ}
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {appTitle}
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Outlet />
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
