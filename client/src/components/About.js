import { Grid, Typography } from '@mui/material'
import React from 'react'


function About() {
 return (
  <div>
  <Grid container justifyContent="center">
  <Typography

  // variant="contained"
  // style={{ textDecoration: "none" }}
  sx={{ margin: 1, borderRadius: 10,fontSize:28}}
 >
 <Grid container class="text-left" justifyContent="left">
 <h2 class="display-4">Welcome To Blogzz </h2><br></br>
    <h5>Course Code : 2023W-T3 CSD 3103</h5>
    <br></br>
    <h5 style={{textAlign:"center"}}>Developed By</h5><br></br>
    
    <h6 style={{textAlign:"center"}}>Dayanand-C0855076</h6><br></br>
    <h6 style={{textAlign:"center"}}>Madhu babu-C0845570</h6><br></br>
    <h6 style={{textAlign:"center"}}>Dara Vineel - C0855437</h6>
    

</Grid>
  
 </Typography>
 </Grid>
  <Grid container justifyContent="center" >
  {/* <div class="text-center">
    <h2 class="display-4">Welcome To</h2>
    <p>Blogging Site</p>
</div> */}



   {/* <Grid item sm={4}>Dara Vineel - C0855437</Grid>
   <Grid item sm={4}>Dayanand Reddy Samala - C0855076</Grid>
   <Grid item sm={4}>Madhu Babu Mureshetty - C0845570</Grid> */}
  </Grid>
  </div>
 )
}
export default About
