import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<h2>Posts</h2>} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
