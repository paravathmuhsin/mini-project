import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
const User = lazy(() => import("../../Page/Users/User"));
const UserDetails = lazy(() => import("../../Page/Users/UserDetails"));

const SignIn = lazy(() => import("../../Page/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));
const Posts = lazy(() => import("../../Page/Post/Posts"));
const PostDetail = lazy(() => import("../../Page/Post/PostDetail"));
const Comments = lazy(() => import("../../Page/Comments/Comments"));
const CommentsDetail = lazy(() => import("../../Page/Comments/CommentsDetail"));
const TodoList = lazy(() => import("../../Page/todo/TodoList"));
const Todos = lazy(() => import("../../Page/todo/Todos"));

const Albums = lazy(() => import("../../Page/Album/Albums"));
const AlbumDetails = lazy(() => import("../../Page/Album/AlbumDetails"));


const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "post/:id",
        element: <PostDetail />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/comments/:id",
        element: <CommentsDetail />,
      },
      {
        path: "todos",
        element: <Todos />,
      },
      {
        path: "todo/:id",
        element: <TodoList />,
      },
      {
        path: "users",
        element: <User />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
      {
        path: "albums",
        element: <Albums />,
      },
      {
        path: "albums/:id", 
        element: <AlbumDetails />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routers} />
    </Suspense>
  );
};

export default AppRouter;
