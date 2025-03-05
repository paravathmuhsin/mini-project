import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getUsers } from "../../services/user.service";
import { useAppContext } from "../../componets/AppContext/AppContext";

const UserList = () => {
  const [users, setUsers] = useState([]);
 const { setPageTitle } = useAppContext();
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);
  useEffect(() => {
    setPageTitle("User Details")
  }, []);
  return (
    <div>
      {users.map((item, index) => (
        <div key={item.id}>
          <h4>
            <Link to={`/users2/${item.id}`}>{`${index + 1}: ${item.name
              }`}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default UserList