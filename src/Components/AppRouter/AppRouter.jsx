import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";


const SignIn = lazy(() => import("../../Page/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));
const Posts = lazy(() => import("../../Page/Post/Posts"));
const PostDetail = lazy(() => import("../../Page/Post/PostDetail"));
const Comments = lazy(() => import("../../Page/Comments/Comments"))
const CommentsDetail = lazy(() => import("../../Page/Comments/CommentsDetail"));

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