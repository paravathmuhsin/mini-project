import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Loader from "../Loader/Loader";

const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const Layout = lazy(() => import("../Layout/Layout"));
const PostList = lazy(() => import("../../pages/Post/List"));
const PostDetails = lazy(() => import("../../pages/Post/Details"));
const Photos2 = lazy(() => import("../../pages/Photos2/PhotosComp"));
const PhotoGallery = lazy(() => import("../../pages/Photos2/PhotoGallery"));
const UsersList = lazy(() => import("../../pages/Users/List"));
const UserDetails = lazy(() => import("../../pages/Users/Details"));
const TodosList = lazy(() => import("../../pages/Todos/List"));
const TodosDetails = lazy(() => import("../../pages/Todos/Details"));
const CommentList = lazy(() => import("../../pages/Comments/CList"));
const CommentDetails = lazy(() => import("../../pages/Comments/CDetails"));
const PhotosList = lazy(() => import("../../pages/Photos/PhotosList"));
const Photos = lazy(() => import("../../pages/Photos/Photos"));
const UserList2 = lazy(() => import("../../pages/Users2/UserList"));
const UserDetails2 = lazy(() => import("../../pages/Users2/Details"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<PostList />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="users" element={<UsersList />} />
            <Route path="users/:id" element={<UserDetails />} />
            <Route path="todos" element={<TodosList />} />
            <Route path="todos/:id" element={<TodosDetails />} />
            <Route path="comments" element={<CommentList />} />
            <Route path="comments/:id" element={<CommentDetails />} />
            <Route path="photos" element={<PhotosList />} />
            <Route path="photos/:id" element={<Photos />} />
            <Route path="photos2" element={<PhotoGallery />} />
            <Route path="photos2/:id" element={<Photos2 />} />
            <Route path="users2" element={<UserList2 />} />
            <Route path="users2/:id" element={<UserDetails2 />} />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
