import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogout } from "../../../Store/actions/login.action";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { useState } from "react";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";

export default function MenuContent() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [indexx, setIndexx] = useState(0);
  const logout = () => {
    localStorage.clear();
    dispatch(setLogout());
    nav("/sign-in");
  };

  const mainListItems = [
    {
      text: "Home",
      icon: <HomeRoundedIcon />,
      click: () => {
        nav("/");
        setIndexx(0);
      },
    },
    {
      text: "Comments",
      icon: <ChatBubbleRoundedIcon />,
      click: () => {
        nav("/comments");
      },
    },
    {
      text: "Tasks",
      icon: <TaskRoundedIcon />,
      click: () => {
        nav("/todo");
        setIndexx(1);
      },
    },
    {
      text: "Users Details",
      icon: <PersonIcon />,
      click: () => {
        nav("/users");
      },
    },
  ];
  const secondaryListItems = [
    { text: "Settings", icon: <SettingsRoundedIcon /> },
    { text: "Logout", icon: <LogoutRoundedIcon />, click: logout },
  ];

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem
            key={index}
            onClick={item.click}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton selected={index === indexx}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem
            key={index}
            onClick={item.click}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
