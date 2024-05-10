import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import { useAppContext } from "../../components/AppContext/AppContext";
import { Skeleton } from "@mui/material";
import { getTodo } from "../../models/todos.model";

const TodoDetails = () =>{
    const { id } = useParams();
    const [todoList, setTodoList] = useState(null);
    const { setAppTitle } = useAppContext();

    useEffect(() => {
        setAppTitle("Todos");
    }, [setAppTitle]);
    useEffect(() => {
        getTodo(id).then((result) => {
            setTodoList(result);
        });
    }, [id]);
    return(
        <>
            <Title>Todos</Title>
            {
              todoList? 
                (
                <>
                    <h2>{todoList.title}</h2>
                </>
                ):
                (
                <>
                    <Skeleton variant="text" height={40} sx={{ fontSize: "1rem" }}/>
                    <br/>
                    <Skeleton variant="rectangular" height={60}/>
                </>
            )}
        </>
    );
};

export default TodoDetails;