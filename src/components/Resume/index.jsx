import React from "react";
import { Typography } from "@mui/material";
import { Javascript, Html, Css } from '@mui/icons-material'


function Resume(){

  return(
    <section id='resume' className="full_bleed">
      <Typography variant="h1" id='resume_header'>
        RESUME
      </Typography>

      <Typography variant="h3">
        Languages
      </Typography>
      <Javascript/>
      <Html />
      <Css />
      <hr />

      <Typography variant="h3">
        Skills
      </Typography>
      <hr />
    </section>
  )

}

export default Resume;