import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { useAppContext } from "../../components/AppContext/AppContext";
import { Skeleton } from "@mui/material";
import { getUser } from "../../models/users.model";

const UserDetails = () =>{
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const { setAppTitle } = useAppContext();

    useEffect(() => {
        setAppTitle("user Details");
    }, [setAppTitle]);
    useEffect(() => {
        getUser(id).then((result) => {
            setUser(result);
        });
    }, [id]);
    return (
        <>
          <Title>User Details</Title>
          {user ? (
            <>
              <h2>{user.name}</h2>
              <email>{user.email}</email>
            </>
          ) : (
            <>
              <Skeleton variant="text" height={40} sx={{ fontSize: "1rem" }} />
              <br />
              <Skeleton variant="rectangular" height={60} />
            </>
          )}
        </>
      );
};

export default UserDetails;