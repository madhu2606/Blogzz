import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Avatar,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Box,
  IconButton,
  Paper,
  Grid,
} from "@mui/material";
import {
  DeleteForeverOutlined,
  ModeEditOutlineOutlined,
} from "@mui/icons-material";
import CheckIcon from '@mui/icons-material/Check';
import axios from "axios";
import { useSelector } from "react-redux";

const Blog = ({ title, content, image, userName, isUser, id ,isApproved}) => {
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.admin);


  const handleEdit = (event) => {
    navigate(`/myBlogs/${id}`);
  };
  const handleApprove = (event) => {
    ApproveRequest().then(() => navigate("/"));
  };
  const ApproveRequest = async () => {
    const res = await axios
      .put(`http://localhost:8000/api/blog/updateBlogAproval/${id}`)
      .catch((err) => console.log(err));

    const data = res.data;
    return data;
  };
  

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:8000/api/blog/${id}`)
      .catch((err) => console.log(err));

    const data = res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest().then(() => navigate("/"));
  };

  return (
   
    <div>
      <Card
        sx={{
          width: "80%",
          height:"500px",
          margin: "auto",
          marginTop: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": { boxShadow: "10px 10px 20px #ccc" },
        }}
      >
        {isUser && (
          <Box display={"flex"}>
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineOutlined color="info" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverOutlined color="error" />
            </IconButton>
          </Box>
        )}
        {isAdmin && !isApproved ?(
          <Box display={"flex"}>
            <IconButton onClick={handleApprove} sx={{ marginLeft: "auto" }}>
              <CheckIcon color="success" />
            </IconButton>
           
          </Box>
        ): ''}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "lightblue" }} aria-label="blog">
              {userName && userName.charAt(0)} 
            </Avatar>
          }
          title={title}
          subheader=""
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Image"
        />
        <CardContent className="blogcard" sx={{height:"150px",overflowY:"auto",scrollbarWidth: "none",scrollbarWidth:"2px"}}>
          <hr />
          <br />
          <Typography variant="body2" color="text.secondary">
            <b>{userName}</b> {": "}
            {content}
          </Typography>
        </CardContent>
        {/* <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar sx={{ bgcolor: "lightblue" }} aria-label="blog">
              {userName && userName.charAt(0)}
            </Avatar>
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
              Suspendisse congue vulputate lobortis. Pellentesque at interdum
              tortor. Quisque arcu quam, malesuada vel mauris et, posuere
              sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
              metus, efficitur lobortis nisi quis, molestie porttitor metus.
              Pellentesque et neque risus. Aliquam vulputate, mauris vitae
              tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
      </Paper> */}
      </Card>
    </div>
  )

};

export default Blog;
