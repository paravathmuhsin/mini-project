import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));
const PostList = lazy(() => import("../../pages/Post/List"));
const PostDetails = lazy(() => import("../../pages/Post/Details"));
const AlbumList = lazy(() => import("../../pages/Album/AlbumList"));
const AlbumDetails = lazy(() => import("../../pages/Album/AlbumDetails"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="posts/:id" element={<PostDetails />} />
          <Route path="albums" element={<AlbumList />} />
          <Route path="albums/:id" element={<AlbumDetails />} /> 
        </Route>
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
