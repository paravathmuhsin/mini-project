import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import useAppContext from "../../AppContext/useAppContext";
import { Link } from "react-router-dom";
import classes from "./layout.module.css";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: "center",
  },
}));

export default function NavbarBreadcrumbs() {
  const {
    context: { breadcrumbs },
  } = useAppContext();
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {breadcrumbs.map((item) =>
        item.link ? (
          <Link
            className={classes.breadcrumbLink}
            key={item.label}
            to={item.link}
          >
            <Typography variant="body1">{item.label}</Typography>
          </Link>
        ) : (
          <Typography
            key={item.label}
            variant="body1"
            sx={{ color: "text.primary", fontWeight: 600 }}
          >
            {item.label}
          </Typography>
        )
      )}
    </StyledBreadcrumbs>
  );
}
