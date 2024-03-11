import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loading from "../Loading/Loading";
import AppLayout from "../AppLayout/AppLayout";

const Home = lazy(() => import("../../pages/Home/Home"));
const Albums = lazy(() => import("../../pages/Albums/Albums"));
const AlbumDetails = lazy(() => import("../../pages/Albums/AlbumDetails"));
const PostDetails = lazy(() => import("../../pages/Home/PostDetails"));
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
        path: "album",
        elememt: <Albums />
      },
      
      {
        path: "albums/:id",
        elelment: <AlbumDetails />
      }
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
