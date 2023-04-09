import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import {

  Grid,
  Typography,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
function UserBlogs() {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:8000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);


  return (
    <div>
    <Grid container justifyContent="center">
       <Typography

          variant="contained"
          style={{ textDecoration: "none" }}
          sx={{ margin: 1, borderRadius: 10,background:"lightBlue",padding:"10px" }}
        >
          Approved Blogs
        </Typography>
    </Grid>

      <Grid container >
        {user &&


          user.map((blog, index) => (
            blog.isApproved && (
              <Grid item sm={4}>
                <Grid container justifyContent="center" >
                  <Blog
                    id={blog._id}
                    key={index}
                    isUser={true}
                    title={blog.title}
                    content={blog.content}
                    image={blog.image}
                    userName={blog.user.name}
                    isApproved={blog.isApproved}
                  />
                </Grid>
              </Grid>
            )
          ))}
      </Grid>
      <br></br>
      <Grid container justifyContent="center">
       <Typography

          variant="contained"
          style={{ textDecoration: "none" }}
          sx={{ margin: 1, borderRadius: 10 ,background:"lightBlue",padding:"10px"}}
        >
          UnApproved Blogs
        </Typography>
    </Grid>


      <Grid container >



       
        {user &&

          user.map((blog, index) => (
            !blog.isApproved && (
              <Grid item sm={4}>
                <Grid container justifyContent="center" >
                  <Blog
                    id={blog._id}
                    key={index}
                    isUser={true}
                    title={blog.title}
                    content={blog.content}
                    image={blog.image}
                    userName={blog.user.name}
                    isApproved={blog.isApproved}
                  />
                </Grid>
              </Grid>
            )
          ))}


      </Grid>
    </div>

  );
}

export default UserBlogs;
