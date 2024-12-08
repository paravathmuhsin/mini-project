import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Comments from "../../Page/Comments/Comments";
import CommentsDetail from "../../Page/Comments/CommentsDetail";

const SignIn = lazy(() => import("../../Page/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));
const Posts = lazy(() => import("../../Page/Post/Posts"));
const PostDetail = lazy(() => import("../../Page/Post/PostDetail"));

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
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<h2>Loading..</h2>}>
      <RouterProvider router={routers} />
    </Suspense>
  );
};

export default AppRouter;
