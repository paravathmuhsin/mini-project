import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));
const PostList = lazy(() => import("../../pages/Post/List"));
const PostDetails = lazy(() => import("../../pages/Post/Details"));
const UsersList = lazy(() => import("../../pages/Users/List"));
const UserDetails = lazy(() => import("../../pages/Users/Details"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="users" element={<UsersList />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
