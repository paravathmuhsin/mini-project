import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));
const PostList = lazy(() => import("../../pages/Post/List"));
const PostDetails = lazy(() => import("../../pages/Post/Details"));
const UsersList = lazy(() => import("../../pages/Users/List"));
const UserDetails = lazy(() => import("../../pages/Users/Details"));
const TodosList = lazy(()=> import("../../pages/Todos/List"));
const TodosDetails = lazy(()=> import("../../pages/Todos/Details"));
const CommentList = lazy(() => import("../../pages/Comments/CList"));
const CommentDetails = lazy(() => import("../../pages/Comments/CDetails"));
const PhotosList = lazy(() => import("../../pages/Photos/PhotosList"));
const Photos = lazy(() => import("../../pages/Photos/Photos"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="users" element={<UsersList />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="todos" element={<TodosList/>} />
          <Route path="todos/:id" element={<TodosDetails/>} />
          <Route path="comments" element={<CommentList />} />
          <Route path="comments/:id" element={<CommentDetails />} />
          <Route path="photos" element={<PhotosList />} />
          <Route path="photos/:id" element={<Photos />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
