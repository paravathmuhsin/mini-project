import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuContent from "./MenuContent";
import OptionsMenu from "./OptionsMenu";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {

  //using local storage for getting login name
  //const currentUser= JSON.parse(localStorage.getItem("currentUser"));

  //using redux for getting login name
  const { currentUser } = useSelector((state) => state.login);

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "calc(var(--template-frame-height, 0px) + 4px)",
          p: 1.5,
        }}
      >
        <h2>Logo</h2>
      </Box>
      <Divider />
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuContent />
      </Box>
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* //to set static icons
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        /> */}

        {/* //to set dynamic icon */}
        <IconButton
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>{currentUser.name[0]}</Avatar>
        </IconButton>

        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            {/* Riley Carter */}
            {currentUser.name}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {/* riley@email.com */}
            {currentUser.email}
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
