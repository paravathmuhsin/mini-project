import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { gettodo, getuser } from "../../services/post.service";
import "./style.scss";

const Details = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState();
  // const [user, setUser] = useState();
  const [userDetail, setUserDetails] = useState();

  useEffect(() => {
    gettodo(id).then((res) => {
      setTodos(res);
      // setUser(res.userId);
    });
  }, [id]);

  useEffect(() => {
    if (todos?.userId) {
      getuser(todos.userId).then((res1) => {
        setUserDetails(res1);
      });
    }
  }, [todos?.userId]);

  return (
    <div>
      <h1>Details of todos</h1>
      {todos && userDetail && (
        <div className="card_detail_wrapper">
          <div
            className={
              (todos.completed ? "c_green" : "nc_red") + " card_detail_header"
            }
          >
            {todos.completed ? "Completed" : "Not Completed"}
          </div>
          <div className="card_detail_content">
            <h2>Todos ID : {todos.id}</h2>
            <h2>User ID : {todos.userId}</h2>
            <h2>Todos title : {todos.title}</h2>
            <div>
              <h2 className="user_detail">Owner details</h2>
              <h3>Name: {userDetail.name}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Details;
