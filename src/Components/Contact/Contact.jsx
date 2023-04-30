import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const [done , setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iw1xkpq",
        "template_9n1gwuh",
        form.current,
        "gkGB0e2F87D8-PyCz"
      )
      .then(
        (result) => {
          setDone(!done)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClose = () => {
    
  }
  
  return (
    <>
    <Snackbar open={done} autoHideDuration={6000} message="Submitted Seccessfully" onClose={handleClose}/>
      <div className="contact-form">
        <div className="w-left">
          <div className="awesome">
            <span> Get in touch</span>
            <span>Contact Me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>

        <div className="c-right">
          <form ref={form} onSubmit={(e) => sendEmail(e)}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="Message" rows="4" style={{minHeight: "4rem" , width: "20rem"}}></textarea>    
            <button className="button" onClick={(e) => sendEmail(e)} style={{width: "100px"}}>Send</button>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
