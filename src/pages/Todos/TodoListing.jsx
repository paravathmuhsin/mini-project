import { useEffect, useReducer } from "react";
import { useAppContext } from "../../components/AppContext/AppContext";
import Title from "../../components/Title/Title";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { getTodos } from "../../models/todos.model";

const reducer = (state, action) => {
    if (action.type === "SET_TODOS") {
      return action.payload;
    }
    return state;
};

const Listing = () => {
    const {setAppTitle} = useAppContext();
    const [todos, dispatch] = useReducer(reducer, []);  

    useEffect(() => {
        setAppTitle("Post Listing");
        }, [setAppTitle]);

    useEffect(() => {
        getTodos().then((res) => {
            dispatch({ type: "SET_TODOS", payload: res }); 
        });
    }, []);
    return(
        <>
            <Title>Todo Listing</Title>
            {
                todos.length ? (
                    todos.map((item) => (
                        <Link key={item.id} to={"/todos/" + item.id}>
                            <h3>{item.title}</h3>
                        </Link>
                    ))
                ) : (
                    <>
                        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                    </>
                )
            }
            
        </>
    )
}

export default Listing;