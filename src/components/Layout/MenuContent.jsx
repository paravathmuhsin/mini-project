import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import { NavLink } from "react-router-dom";

const mainListItems = [{ text: "Home", to: "/", icon: <HomeRoundedIcon /> },
  { text: "Albums", to: "/albums", icon: <PhotoAlbumIcon />}
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <NavLink key={item.text} to={item.to}
          style={{ textDecoration: "none", color: "inherit" }}>
            {({ isActive }) => (
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton selected={isActive}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            )}
          </NavLink>
        ))}
      </List>
    </Stack>
  );
}
