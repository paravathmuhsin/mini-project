import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getUser } from "../../services/user.service";

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
  const location = useLocation();
  const path = location.pathname;
  const { userId } = useParams();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    if (userId) {
      getUser(userId).then((res) => setUserName(res.name));
    }
  }, [userId]);
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      <Typography variant="body1">Dashboard</Typography>

      {path === "/" && (
        <Typography
          variant="body1"
          sx={{ color: "text.primary", fontWeight: 600 }}
        >
          Home
        </Typography>
      )}

      {path.startsWith("/users") && (
        <Typography
          variant="body1"
          sx={{ color: "text.primary", fontWeight: 600 }}
        >
          Users
        </Typography>
      )}

      {userId && userName && (
        <Typography
          variant="body1"
          sx={{ color: "text.primary", fontWeight: 600 }}
        >
          {userName}
        </Typography>
      )}
    </StyledBreadcrumbs>
  );
}
