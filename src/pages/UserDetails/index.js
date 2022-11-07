import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../services/userService";


const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser(id).then((res) => setUser(res));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      ) : null}
    </div>
  );
};

export default UserDetails;
