import { useEffect, useState } from "react";
import {   useParams } from "react-router-dom";
import { Box, Card, CardContent, Checkbox, CircularProgress, Typography } from "@mui/material";
import { getTodo } from "../../Services/todos.service";
import axios from "axios";
import useAppContext from "../../Components/AppContext/useAppContext";
import { TASKS } from "../../Utils/menuConstants";

const TodoList = () => {
  const { id } = useParams();
  const [todo, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const {setContext} =useAppContext()

  useEffect(()=>{
    setContext({ appTitle: 'Task List', breadcrumbs:[{label : TASKS,  link :  "/todos"},{label: "Task List"}], activeMenu: TASKS})
  },[]);


  
  useEffect(() => {
    axios
   .get("todos")
   .then(( res) => {
     setTodos(res.data);
     setLoading(false);
   })
   .catch((err) => {
     console.error("Error fetching todos:", err);
     setLoading(false);
   });
}, []);



  useEffect(() => {
    getTodo(id).then((res) => {
      setTodos(res);
    });
  }, [id]);


  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', width: '100%' }}>
        <CircularProgress  size="5rem"  />
      </Box>
    );  
  }


  return (
    <div>
      {todo && (
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
      )}
    </div>
  );
};

export default TodoList;