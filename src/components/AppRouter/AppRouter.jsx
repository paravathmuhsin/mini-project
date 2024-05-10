import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "../Loader/Loader";

const Login = lazy(() => import("../../pages/Login/Login"));
const Layout = lazy(() => import("../Layout/Layout"));
const PostListing = lazy(() => import("../../pages/Post/Listing"));
const PostDetails = lazy(() => import("../../pages/Post/Details"));
const TodoListing = lazy(() => import("../../pages/Todos/TodoListing"));
const TodoDetails = lazy(() => import("../../pages/Todos/TodoDetails"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PostListing />,
      },
      {
        path: "post/:id",
        element: <PostDetails />,
      },
      {
        path: "todos",
        element: <TodoListing />,
      },
      {
        path: "todos/:id",
        element: <TodoDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default AppRouter;
