import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Login = React.lazy(() => import("../pages/Login"));
const ErrorPage = React.lazy(() => import("./ErrorPage"));
const Layout = React.lazy(() => import("./Layout"));
const Post = React.lazy(() => import("../pages/Post"));

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
        path: 'users',
        element: <h4>User</h4>,
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
