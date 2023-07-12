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
        {/* <br></br> */}
        <p className="blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit odit delectus necessitatibus omnis voluptate exercitationem numquam, voluptatem error, officia modi dolorum debitis placeat consequatur ex esse veritatis aperiam dolorem accusamus nulla odio dolores officiis quisquam quaerat. Asperiores harum ad, assumenda doloremque ipsum, deleniti aperiam ratione consequatur vero ea tenetur.</p>
        <div id='about_buttons'>
          <Button variant="contained" onClick={handleDownload}>
            <Download /> Resume
          </Button>
          <Button variant="contained" onClick={handleContact}>
            <Work /> Hire Me!
          </Button>          
        </div>
      </section>
      <hr/>
    </>
  )

}

export default About;