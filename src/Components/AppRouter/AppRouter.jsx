import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const SignIn = lazy(() => import("../../Page/SignIn/SignIn"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: <h2>Welcome</h2>,
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
