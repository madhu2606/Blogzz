import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import { Grid } from "@mui/material";

function Blogs() {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:8000/api/blog")
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data)
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
 
  return (
    <Grid container spacing={2}>
          <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            content={blog.content}
            image={blog.image}
            userName={blog.user.name}

          />
        ))}
          </Grid>
    </Grid>
    </Grid>
  );
}

export default Blogs;
