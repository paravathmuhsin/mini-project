import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router";
import { useAppContext } from "../AppContext/AppContext";

export default function MainGrid() {
  const { pageTitle } = useAppContext();
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        {pageTitle}
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Outlet />
      </Grid>
    </Box>
  );
}
