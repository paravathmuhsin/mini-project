import axios from "../utils/axios";

export const getTodos = () => axios.get("todos").then((res) => res.data);

export const getTodo = (id) => axios.get(`todos/${id}`).then((res) => res.data);