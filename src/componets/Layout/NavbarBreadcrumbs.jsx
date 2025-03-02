import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { useLocation, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/user.service';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs() {
  const location = useLocation();
  // const path = location.pathname;
  const { id } = useParams();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    if (id) {
      getUser(id).then((res) => setUserName(res.name));
    }
  }, [id]);
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
     <Typography variant="body1">Dashboard</Typography>

{location.pathname === "/" && (
  <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
    Home
  </Typography>
)}

{location.pathname.startsWith("/users") && (
  <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
    Users
  </Typography>
)}

{id && userName && (
  <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
    {userName}
  </Typography>
)}
    </StyledBreadcrumbs>
  );
}
