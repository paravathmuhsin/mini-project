import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "../Loader/Loader";

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
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default AppRouter;
