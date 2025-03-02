import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { NavLink } from "react-router";
import { Task } from "@mui/icons-material";
import "../../assets/style.scss";


const mainListItems = [{ text: "Home", to: "/", icon: <HomeRoundedIcon /> },{text:"Todos", to: "/todos", icon:<Task/> }];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <NavLink key={index} to={item.to} className={({ isActive }) => (isActive ? "active" : "")} >
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton selected={index === 0}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Stack>
  );
}
