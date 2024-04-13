import './Contact.css';
import img1 from './about-us.jpg';
import {Button} from "@mui/material";
import React from "react";

export const Contact = (props) =>  {
  return (
  
    <div className='min-h-screen flex items-center justify-center' 
        style={{ 
           backgroundImage: `url(${img1})`,
           backgroundPosition: 'center',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat'
         }}>
      <div class='textOnImageContact'>
      <u>Contact Us</u>
        <p id="descriptionContact">
            <form action="mailto:baydevelops@gmail.com" method="post" enctype="text/plain"> 
                <label for="name">Enter Name </label>
                <br></br>
                <input type="text" id="name" name="name" size="60" required></input>
                <br></br>
                <label for="email">Enter Email </label>
                <br></br>
                <input type="text" id="email" name="email" size="60" required></input>
                <br></br>
                <fieldset>
                    <legend>Message</legend>
                    <textarea id="textArea" rows="4" cols="62" required></textarea>
                </fieldset>
            <Button
              className="self-stretch"
              id="sendContact"
              color="error"
              name="Purchse Service"
              size="large"
              variant="contained">
              Send
            </Button>
            </form>
        </p>
      </div>
    </div>

  );
}

export default Contact;