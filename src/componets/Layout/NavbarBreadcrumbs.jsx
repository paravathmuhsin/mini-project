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

  // const location = useLocation(); // Get the current location object
  // const [page, setPage] = useState('Home');

  // useEffect(() => {
  //   const urlSegments = window.location.href.split('/').filter((segment) => segment);
  //   //console.log(location);
  //   // Set the page state based on the URL segments
  //   if (urlSegments[2] == null) {
  //     setPage("Home");  // If there's no third segment, set it to "Home"
  //   } else {
  //     setPage(urlSegments[2]);  // Otherwise, set it to the third URL segment
  //   }
  // }, [location]);
  
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
