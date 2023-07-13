import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Typography, Button, CircularProgress, Snackbar, Alert } from "@mui/material";
import axios from "axios";

function Contact() {
  
  const [isSending, setIsSending] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSnack, setShowSnack] = useState(true);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackSeverity, setSnackSeverity] = useState('success');

  const handleSnack = (message, severity) => {
    setSnackMessage(message);
    setSnackSeverity(severity);
    setShowSnack(true);
  }

  const sendEmail = async (event) => {
    event.preventDefault();

    if(isSending){
      setShowError(true);
      console.log('Please wait until the email is done sending');
      return;
    }

    try {
      setIsSending(true);
      let response = await axios.post(`${process.env.REACT_APP_SERVER}/email`, {
        senderName: event.target.name.value,
        senderEmail: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
      });
      setIsSending(false);
      handleSnack('Email successfully sent!', 'success');
      console.log(response)
    }
    catch(e){
      setIsSending(false);
      handleSnack('Error sending email - Try again.', 'error');
      console.error(e)
    }

    setShowError(false);
  }

  return(
    <section id="contact" className="full_bleed">

      <Typography variant="h1" id="contact_header">
        CONTACT
      </Typography>

      <form id='email_form' onSubmit={sendEmail}>
        
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

        <Button variant="contained" type="submit" >
          {isSending ? <CircularProgress size='1.55rem' color='inherit' /> : 'SEND'}
        </Button>
        <br/>
        {isSending ? <p>Please be patient, it may take a while for the server to spin up if it was inactive</p> : <p style={{visibility:'hidden'}}>here for consistency</p>}
      </form>

      {showError ? 'Please wait until email is done sending...' : null}
      <Snackbar
        id='email_alert'
        open={showSnack}
        autoHideDuration={4000}
        onClose={() => setShowSnack(false)}
        style={{color: 'white'}}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        key={'bottom center'}
      >
        <Alert onClose={() => setShowSnack(false)} severity={snackSeverity} variant="filled">
          {snackMessage}
        </Alert>
      </Snackbar>
    </section>
  )

}

export default Contact;