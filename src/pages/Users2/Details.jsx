
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUser }  from "../../services/user.service";

const Details = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    getUser(id).then((res) => {
      setUser(res);
    });
  }, [id]);

  return (
    <div>
      {user && (
        <>
          <h4>User ID: {user.id}</h4>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>

          <h4>Address</h4>
          <p>Street: {user.address.street}</p>
          <p>Suite: {user.address.suite}</p>
          <p>City: {user.address.city}</p>
          <p>Zipcode: {user.address.zipcode}</p>
          <p>Geo: Lat {user.address.geo.lat}, Lng {user.address.geo.lng}</p>

          <h4>Company</h4>
          <p>Company Name: {user.company.name}</p>
          <p>Catchphrase: {user.company.catchPhrase}</p>
          <p>BS: {user.company.bs}</p>

          <h4>Contact</h4>
          <p>Phone: {user.phone}</p>
          <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        </>
      )}
    </div>
  );
};

export default Details;