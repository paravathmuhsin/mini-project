import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));
const PostList = lazy(() => import("../../pages/Post/List"));
const PostDetails = lazy(() => import("../../pages/Post/Details"));
const PhotosList = lazy(() => import("../../pages/Photos/PhotosList"));
const Photos = lazy(() => import("../../pages/Photos/Photos"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="photos-list" element={<PhotosList />} />
          <Route path="photos/:id" element={<Photos />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
