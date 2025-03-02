import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getUsers } from "../../services/users.service";

const UserList= () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);
  return (
    <div>
    <h3><b> Users </b></h3>
           {users.map((item, index) => (
        <div key={item.id}>
          <h4>
            <Link to={`/users/${item.id}`}>{`${index + 1}: ${
              item.name
            }`}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default UserList
