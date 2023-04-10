import "./App.css";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import Users from "./components/Users"

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import UnApproved from "./components/Unaproved";
import About from "./components/About";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.signin());
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header>
        <Header />
      </Header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/auth" element={<Auth />} />
              <Route path="/" element={<Blogs />} />
              <Route path="/about" element={<About />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} />
              <Route path="/users" element={<Users />} />
              <Route path="/unaproved" element={<UnApproved />} />
              <Route path="/about" element={<About />} />
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
