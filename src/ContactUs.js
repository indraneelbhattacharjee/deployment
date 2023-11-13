// ContactUs.js

import React from 'react';
import './App.css';
import './Bay Develops Top Nav Bar/src/global.css';
import './Bay Develops Top Nav Bar/tailwind.config.js';
import './Bay Develops Side Nav Bar/src/global.css';
import './Bay Develops Side Nav Bar/tailwind.config.js';
import TopNavbar from './Bay Develops Top Nav Bar/src/components/TopNavbar.js';
import SideNavbar from './Bay Develops Side Nav Bar/src/pages/NavigationDark.js';
import backgroundImage from './About_Us.jpg';

function ContactUs() {
  return (
    <div>
      <TopNavbar />
      <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="header">
          <h1>Contact Us</h1>
        </div>
        <div className="content">
          <div className="form">
            <label htmlFor="fname">Enter Name:</label>
            <input className="input" type="text" id="fname" name="fname" />

            <label htmlFor="email">Enter Email:</label>
            <input className="input" type="text" id="email" name="email" />

            <label htmlFor="message">Enter Message</label>
            <textarea className="input py-7" id="message" name="message" />

            <div className="button-container">
              <button className="button">Send</button>
            </div>
          </div>
        </div>
      </div>
      <SideNavbar />
    </div>
  );
}

export default ContactUs;
