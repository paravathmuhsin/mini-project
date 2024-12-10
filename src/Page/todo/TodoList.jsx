import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  Typography,
} from "@mui/material";
import { getTodo } from "../../Services/todos.service";
import useAppContext from "../../Components/AppContext/useAppContext";
import { TASKS } from "../../Utils/menuConstants";

const TodoList = () => {
  const { id } = useParams();
  const [todo, setTodos] = useState(null);
  const { setContext } = useAppContext();

  useEffect(() => {
    setContext({
      appTitle: "Task List",
      breadcrumbs: [{ label: TASKS, link: "/todos" }, { label: "Task List" }],
      activeMenu: TASKS,
    });
  }, []);

  useEffect(() => {
    getTodo(id).then((res) => {
      setTodos(res);
    });
  }, [id]);

  return (
    <div>
      {todo ? (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {todo.title}
            </Typography>
            <Box display="flex" alignItems="center">
              <Checkbox checked={todo.completed} disabled />
              <Typography variant="body1">
                {todo.completed ? "Completed" : "Incomplete"}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            width: "100%",
          }}
        >
          <CircularProgress size="5rem" />
        </Box>
      )}
    </div>
  );
};

export default TodoList;
