import React from "react";
import { Download, Work } from '@mui/icons-material'
import { Button, Typography } from "@mui/material";


function About(){

  const handleDownload = () => {
    const a = document.createElement('a');
    a.download = 'KawikaMiller_Resume.pdf';
    a.href = './assets/KMResume.pdf';
    a.click();
  }

  const handleContact = () => {
    const a = document.createElement('a');
    a.href = '#contact';
    a.click();
  }

  return(
    <>
      <section id='about'>
        <Typography variant="h1" id='name'>KAWIKA MILLER</Typography>
        <Typography variant='h5' id='title'>Full-Stack Software Developer & Digital Artist</Typography>
        <br/>
        <p className="blurb">
          <br/>
          I love the creative thinking and problem solving that comes with both coding and design work. There's nothing quite like the feeling of finally breaking through a barrier!
          <hr/>
          Although I am a full stack developer, I believe my unique background makes me a perfect candidate for Frontend & UI/UX work as it would allow me to put both my skills as an artist and a developer to work.
          <hr/>
          I'm also a huge nerd and when I'm not coding or making art I'm probably gaming or getting sucked into the algorithm and endlessly scrolling through memes and animal videos.
        </p>
        <br/>
        <div id='about_buttons'>
          <Button variant="contained" onClick={handleDownload}>
            Resume <Download /> 
          </Button>
          <Button variant="contained" onClick={handleContact}>
            Hire Me! <Work />
          </Button>          
        </div>
      </section>
      <hr/>
    </>
  )

}

export default About;