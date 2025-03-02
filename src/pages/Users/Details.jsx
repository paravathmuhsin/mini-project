import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUser } from "../../services/user.service";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { MAPS_API_KEY } from "../../API_KEYS";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Details = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(id).then((res) => {
      setUser(res);
    });
  }, [id]);

  if (!user)
    return (
      <Typography sx={{ textAlign: "center", mt: 4 }}>Loading...</Typography>
    );

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4, px: 2 }}>
      <Card
        sx={{
          maxWidth: 500,
          p: 3,
          background: "#2c2c2c",
          color: "white",
          borderRadius: "12px",
          boxShadow: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {user.name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", opacity: 0.8 }}
          >
            @{user.username}
          </Typography>

          <Divider sx={{ my: 2, backgroundColor: "#ffffff33" }} />

          <Typography variant="body1">
            <PhoneIcon sx={{ fontSize: 18, verticalAlign: "middle", mr: 1 }} />
            {user.phone}
          </Typography>

          <Typography variant="body1">
            <EmailIcon sx={{ fontSize: 18, verticalAlign: "middle", mr: 1 }} />
            {user.email}
          </Typography>

          <Typography variant="body1">
            <LanguageIcon
              sx={{ fontSize: 18, verticalAlign: "middle", mr: 1 }}
            />
            {user.website}
          </Typography>

          <Divider sx={{ my: 2, backgroundColor: "#ffffff33" }} />

          <Typography variant="h6" sx={{ mt: 2 }}>
            <BusinessIcon
              sx={{ fontSize: 18, verticalAlign: "middle", mr: 1 }}
            />
            {user.company.name}
          </Typography>
          <Typography variant="body2">{user.company.catchPhrase}</Typography>
          <Typography variant="body2">{user.company.bs}</Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            <LocationOnIcon
              sx={{ fontSize: 18, verticalAlign: "middle", mr: 1 }}
            />
            Address
          </Typography>
          <Typography variant="body2">
            {user.address.street}, {user.address.suite}
          </Typography>
          <Typography variant="body2">
            {user.address.city}, {user.address.zipcode}
          </Typography>

          <Box
            sx={{
              mt: 2,
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #ffffff33",
            }}
          >
            <iframe
              width="600"
              height="450"
              style={{ borderRadius: "8px" }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${user.address.geo.lat},${user.address.geo.lng}`}
            ></iframe>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Details;
