import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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

function Users() {
 const [users, setUsers] = useState()
 const sendRequest = async () => {
  const res = await axios
   .get('http://localhost:8000/api/user')
   .catch((err) => console.log(err))

  const data = await res.data
  console.log(data)
  return data
 }
 useEffect(() => {
  sendRequest().then((data) => setUsers(data.users))
 }, [])
 return (
  <div>
   <Card
    sx={{
     width: "50%",
     margin: "auto",
     marginTop: 2,
     padding: 2,
     boxShadow: "5px 5px 10px #ccc",
     ":hover": { boxShadow: "10px 10px 20px #ccc" },
    }}
   >


    <CardContent>
     <TableContainer>
      <Table>
       <TableHead>
        <TableRow>
         <TableCell>Name</TableCell>
         <TableCell>Email</TableCell>
         <TableCell>Total Blogs</TableCell>
        </TableRow>
       </TableHead>
       <TableBody>
        {users && users.map((user, index) =>
         <TableRow key={index}>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.blogs.length}</TableCell>
         </TableRow>
        )}
       </TableBody>
      </Table>
     </TableContainer>

    </CardContent>

   </Card>
  </div>



 )
}
export default Users
