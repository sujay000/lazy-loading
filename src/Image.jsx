import React from "react";
import Grid from '@mui/material/Grid';

export default function Image(props) {
  return (
   <Grid item xs={12} sm ={6} md={4} className="gridItem">
      
      <img
        className="image"
        src={props.src}
        alt="random"
        loading="lazy"
        width="400px"
        height="300px"
      />
   
    </Grid>
  );
}
