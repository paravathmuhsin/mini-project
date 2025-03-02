import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";

import { Link, useLocation } from "react-router";

const mainListItems = [{ text: "Home", to: "/", icon: <HomeRoundedIcon /> }, { text: "Users", to: "/users", icon: <PeopleRoundedIcon /> }];

export default function MenuContent() {
  const location = useLocation();
  const path= location.pathname
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <Link key={index} to={item.to}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton selected={path === item.to}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Stack>
  );
}
