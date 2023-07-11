import React from "react";
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material'

function Socials(){

  const gitHubUrl = 'https://github.com/KMArtwork';
  const linkedInUrl = 'https://www.linkedin.com/in/kawikamiller/';
  const instagramUrl = 'https://www.instagram.com/k.m__art/';

  const handleClick = (url) => {
    window.open(
      url, "_blank");
  }

  return(
    <section id='socials'>
      <GitHub onClick={() => handleClick(gitHubUrl)} />
      <LinkedIn onClick={() => handleClick(linkedInUrl)} />
      <Instagram onClick={() => handleClick(instagramUrl)} />
    </section>
  )

}

export default Socials;