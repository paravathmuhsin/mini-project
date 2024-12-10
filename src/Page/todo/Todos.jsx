import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getTodos } from "../../Services/todos.service";
import useAppContext from "../../Components/AppContext/useAppContext";
import { TASKS } from "../../Utils/menuConstants";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const { setContext } = useAppContext();

  useEffect(() => {
    setContext({
      appTitle: "Todos",
      breadcrumbs: [{ label: TASKS }],
      activeMenu: TASKS,
    });
  }, []);

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3}>
        {todos.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 12 }}
                >
                  <strong>Task Id:</strong> {item.id}
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ color: "text.secondary", fontSize: 18 }}
                >
                  <strong>Task :</strong> {item.title}
                </Typography>
                <Typography variant="body2">
                  Status :
                  <strong>
                    {item.completed ? "Completed" : "Not Completed"}
                  </strong>
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={"/todo/" + item.id}>View</Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Todos;
