import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

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
      {/* {" "} */}
      {user &&
       
        user.map((blog, index) => (
          <Blog
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            content={blog.content}
            image={blog.image}
            userName={ blog.user.name}
          />
        ))}
    </div>
  );
}

export default UserBlogs;
