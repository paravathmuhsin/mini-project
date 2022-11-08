import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Login = React.lazy(() => import("../pages/Login"));
const ErrorPage = React.lazy(() => import("./ErrorPage"));
const Layout = React.lazy(() => import("./Layout"));
const Post = React.lazy(() => import("../pages/Post"));
const PostDetails = React.lazy(() => import("../pages/PostDetails"));
const Users = React.lazy(() => import("../pages/Users"));
const UserDetails=React.lazy(()=>import("../pages/UserDetails"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Post />,
      },
      {
        path: "post/:id",
        element: <PostDetails />,
      },
      {
        path: "users",
        element: <Users/>,
      },
      {
        path: "users/:id",
        element: <UserDetails/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const Routes = () => {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default Routes;
