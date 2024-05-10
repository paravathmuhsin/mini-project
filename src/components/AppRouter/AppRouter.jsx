import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "../Loader/Loader";

const Login = lazy(() => import("../../pages/Login/Login"));
const Layout = lazy(() => import("../Layout/Layout"));
const PostListing = lazy(() => import("../../pages/Post/Listing"));
const PostDetails = lazy(() => import("../../pages/Post/Details"));
const AlbumListing = lazy(() => import("../../pages/album/Albumlisting"));
const AlbumDetails = lazy(() => import("../../pages/album/Albumdetails"));
const TodoListing = lazy(() => import("../../pages/Todos/TodoListing"));
const TodoDetails = lazy(() => import("../../pages/Todos/TodoDetails"));
const CommentListing = lazy(() => import("../../pages/Comment/Listing"));
const CommentDetails = lazy(() => import("../../pages/Comment/Details"));
const PhotosListing = lazy(() => import("../../pages/Photos/Listing"));

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
        path: "album/",
        element: <AlbumListing />,
      },
      {
        path: "album/:id",
        element: <AlbumDetails />,
      },
      {
        path: "todos",
        element: <TodoListing />,
      },
      {
        path: "todos/:id",
        element: <TodoDetails />,
      },
      {
        path: "comment",
        element: <CommentListing />,
      },
      {
        path: "comment/:id",
        element: <CommentDetails />,
      },
      {
        path: "photos",
        element: <PhotosListing />,
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
