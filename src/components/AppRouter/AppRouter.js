import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loading from "../Loading/Loading";
import AppLayout from "../AppLayout/AppLayout";

const Home = lazy(() => import("../../pages/Home/Home"));
const PostDetails = lazy(() => import("../../pages/Home/PostDetails"));
const Users = lazy(() => import("../../pages/User/Users"));
const UserDetails = lazy(() => import("../../pages/User/UserDetails"));
const Login = lazy(() => import("../../pages/Login/Login"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post/:id",
        element: <PostDetails />,
      },
      {
        path: "user",
        element: <Users />,
      },
      {
        path: "user/:id",
        element: <UserDetails />,
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
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default AppRouter;
