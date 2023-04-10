import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isAdmin = useSelector((state) => state.admin);
  console.log(isAdmin);
  const username = useSelector((state) => state.username);
  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
       
background: "linear-gradient(71deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"

       
      }}
    >
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h4"
          style={{ textDecoration: "none" }}
        >
          Blogzz
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"}>
             {!isAdmin  ? 
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(event, val) => setValue(val)}
            >
         
              <Tab LinkComponent={Link} to="/" label="All Blogs" />
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs " />
              <Tab LinkComponent={Link} to="/blogs/add" label="Create Blogs " />
              <Tab LinkComponent={Link} to="/about" label="About " />
            </Tabs>
              :''
              }
             
              {isAdmin  ? 
                <Tabs
              textColor="inherit"
              value={value}
              onChange={(event, val) => setValue(val)}
            >
             <Tab LinkComponent={Link} to="/" label="All Blogs" />
              <Tab LinkComponent={Link} to="/users" label="Users " />
              <Tab LinkComponent={Link} to="/unaproved" label="Requests " />
              <Tab LinkComponent={Link} to="/about" label="About " />  </Tabs>:''
             
              }
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                Sign In
              </Button>
             
            </>
          )}
          {isLoggedIn && (
            <div>
            <Typography
         
          variant="contained"
          style={{ textDecoration: "none"}}
          sx={{ margin: 1, borderRadius: 10 }}
        >
        {username}
        </Typography>
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
            >
              Log Out
            </Button>
            </div>
          )}
         
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
