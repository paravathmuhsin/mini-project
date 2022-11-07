import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../services/userService";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);
  return (
    <div>
      <h2> List of Users</h2>
      {users.map((item) => (
        <div key={item.id}>
          <Link to={"/users/" + item.id}>
            <h4>{item.name}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
