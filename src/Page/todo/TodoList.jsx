
import axios from "../../Utils/axios";
import { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, Checkbox, Box, CircularProgress } from "@mui/material";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
       axios
      .get("todos")
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching todos:", err);
        setLoading(false);
      });
  }, []);
 

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', width: '100%' }}>
        <CircularProgress  size="5rem"  />
      </Box>
    );  
  }


  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <Grid container spacing={4}>
        {todos.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Task No : {item.id}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Checkbox checked={item.completed} disabled />
                  <Typography variant="body1">
                    {item.completed ? "Completed" : "Incomplete"}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TodoList;
