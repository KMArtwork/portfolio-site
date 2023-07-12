import React from "react";
import { GitHub, LinkedIn, Instagram, Description } from '@mui/icons-material';
import { Tooltip } from "@mui/material";

function Socials(){

  const gitHubUrl = 'https://github.com/KMArtwork';
  const linkedInUrl = 'https://www.linkedin.com/in/kawikamiller/';
  const instagramUrl = 'https://www.instagram.com/k.m__art/';

  const handleClick = (url) => {
    window.open(
      url, "_blank");
  }

  const handleDownload = () => {
    const a = document.createElement('a');
    a.download = 'KawikaMiller_Resume.pdf';
    a.href = './assets/KMResume.pdf';
    a.click();
  }

  return(
    <section id='socials'>
      <GitHub onClick={() => handleClick(gitHubUrl)} />
      <LinkedIn onClick={() => handleClick(linkedInUrl)} />
      <Instagram onClick={() => handleClick(instagramUrl)} />
      <Tooltip title='Download My Resume'>
        <Description onClick={handleDownload} />        
      </Tooltip>
    </section>
  )

}

export default Socials;