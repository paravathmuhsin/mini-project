import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import "../../Style/NavSelect.scss";
import { Link } from "react-router";
//import { Link, NavLink } from "react-router";

const mainListItems = [
  { text: "Home", to: "/", icon: <HomeRoundedIcon /> },
  { text: "Comments", to: "/comments", icon: <CommentRoundedIcon /> }
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          // <nav className="appNav-scss" key={index}>
          <Link key={index} to={item.to}>
          {/* <NavLink className={({isActive}) => (isActive ? "active" : "")} to={item.to}> */}
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton selected={index === 0}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
          // </NavLink>
          // </nav>
        ))}
      </List>
    </Stack>
  );
}