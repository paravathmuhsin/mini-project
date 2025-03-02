import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));
const PostList = lazy(() => import("../../pages/Post/List"));
const PostDetails = lazy(() => import("../../pages/Post/Details"));
const TodosList = lazy(()=> import("../../pages/Todos/List"));
const TodosDetails = lazy(()=> import("../../pages/Todos/Details"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="/todos" element={<TodosList/>} />
          <Route path="/todos/:id" element={<TodosDetails/>} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
