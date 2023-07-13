import React from "react";
import TextField from '@mui/material/TextField';
import { Typography, Button } from "@mui/material";

function Contact() {

  // let transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.EMAIL_USERNAME,
  //     password: process.env.EMAIL_PASSWORD
  //   },
  // });

  // const sendMail = async () => {

  //   try{
  //     const sent = await transporter.sendMail({
  //       from: ' "Fake Guy" <fake@gmail.com>',
  //       to: 'kmillerdevsign@gmail.com',
  //       subject: 'test subject',
  //       text: 'Hello mf',
  //       html: "<b>Yo bruh</b>"
  //     });

  //     console.log(sent);
  //   }
  //   catch(e){
  //     console.error('UNABLE TO SEND EMAIL', e);
  //   }


  //   console.log('message has been sent!')
  // }

  return(
    <section id="contact" className="full_bleed">

      <Typography variant="h1" id="contact_header">
        CONTACT
      </Typography>

      <div id='email_form'>

        <div id='sender_contact_details'>
          <TextField
            fullWidth 
            required
            id='name'
            label='Your Name'
            placeholder="Mario Luigi"
          />
          <TextField
            fullWidth
            required
            id='email'
            label='Your Email'
            placeholder="Full Name"
          />
        </div>

        <TextField 
          required
          fullWidth
          id='subject'
          label='Subject'
          placeholder="Subject"
        />

        <TextField 
          fullWidth
          multiline
          minRows={8}
          required
          id='message'
          label='Message'
          placeholder="Your message"
        />

        <Button variant="contained">SEND</Button>

      </div>

    </section>
  )

}

export default Contact;