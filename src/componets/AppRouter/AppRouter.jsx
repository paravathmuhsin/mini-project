import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));
const UserList  = lazy(() => import("../../pages/Post/UserList"));
const UserDetails = lazy(() => import("../../pages/Post/Details"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
