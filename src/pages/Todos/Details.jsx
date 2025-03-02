import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { gettodo, getuser } from "../../services/post.service";
import "../../assets/style.scss";


const Details = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState();
  const [user, setUser] = useState();
  const [user_detail, setUser_details] = useState({});
  useEffect(() => {
    gettodo(id).then((res) => {
      setTodos(res);
      setUser(res.userId);
    });
    getuser(id).then((res)=>{
      setUser_details(res);
    });
    console.log(user_detail);
  }, [id,user]);
  
  return (
    <div>
      <h1>Details of todos</h1>
      {todos && (
        
        <div className="card_detail_wrapper">
          <div className={(todos.completed ? "c_green" : "nc_red") +" card_detail_header"}>{todos.completed ? "Completed" : "Not Completed"}</div>
          <div className="card_detail_content">
          <h2>Todos ID : {todos.id}</h2>
          <h2>User ID : {todos.userId},
          </h2>
          <h2 className="">Todos title : {todos.title}</h2>
          <div>
            <h2>Owner of this todos : {user_detail.name}</h2>
            
            </div>

          </div>
          
        </div>
      )}
    </div>
  );
};
export default Details;
