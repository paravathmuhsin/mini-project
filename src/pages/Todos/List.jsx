import { useEffect, useState } from "react";
import { Link } from "react-router";
import { gettodos } from "../../services/post.service";
import "./style.scss";

const List = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    gettodos().then((res) => {
      setTodos(res);
    });
  }, []);
  return (
    <>
      <h1>List of Todos</h1>
      <div className="card_wrapper">
        {todos.map((item, index) => (
          <div key={item.id} className="card_inner_wrapper">
            <span>Todos {`${index + 1}`}</span>
            <p>{item.title}</p>
            <Link to={`/todos/${item.id}`}>Get insights</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
