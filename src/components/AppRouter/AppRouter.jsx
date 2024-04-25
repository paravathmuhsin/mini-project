import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Login = lazy(() => import("../../pages/Login/Login"));
const Layout = lazy(() => import("../Layout/Layout"));
const Listing = lazy(() => import("../../pages/Post/Listing"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Listing />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRouter;
