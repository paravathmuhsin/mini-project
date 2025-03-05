import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { Link } from "react-router";
import { useAppContext } from "../AppContext/AppContext";

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

//console.log(window.location.href);
//const url=window.location.href;
//const urlSegments = url.split('/').filter((segment) => segment);
//console.log(urlSegments);

export default function NavbarBreadcrumbs() {
  const { appBreadcrumbs } = useAppContext();

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {appBreadcrumbs.map((item) => {
        if (item.link) {
          return (
            <Link key={item.label} to={item.link}>
              <Typography variant="body1">{item.label}</Typography>
            </Link>
          );
        } else {
          return (
            <Typography
              key={item.label}
              variant="body1"
              sx={{ color: "text.primary", fontWeight: 600 }}
            >
              {item.label}
            </Typography>
          );
        }
      })}
    </StyledBreadcrumbs>
  );
}
