import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const SignIn = lazy(() => import("../../Page/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <h2>Home page</h2>,
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
