import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "../Loader/Loader";

const Login = lazy(() => import("../../pages/Login/Login"));
const Layout = lazy(() => import("../Layout/Layout"));
const PostListing = lazy(() => import("../../pages/Post/Listing"));
const PostDetails = lazy(() => import("../../pages/Post/Details"));
const CommentListing = lazy(() => import("../../pages/Comment/Listing"));
const CommentDetails = lazy(() => import("../../pages/Comment/Details"));

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
    ],
  },
  {
    path: "/comment",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CommentListing />,
      },
      {
        path: "/comment/:id",
        element: <CommentDetails />,
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
