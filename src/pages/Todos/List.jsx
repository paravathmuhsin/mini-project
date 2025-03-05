import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getTodos } from "../../services/todos.service";
import "./style.scss";
import { useAppContext } from "../../componets/AppContext/AppContext";

const List = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
    });
  }, []);
  const { setPageTitle, setAppBreadcrumbs } = useAppContext();

  useEffect(() => {
    setPageTitle("Todos");
    setAppBreadcrumbs([
      {
        label: "Todos list",
      },
    ]);
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
