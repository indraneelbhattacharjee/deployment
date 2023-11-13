import React from "react";
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

export const Header = (props) => {
  return (
    <header id="header">
      <div class="main_div">
        <div class="image_div">
            <img class="div_image" src="img/Landing.png" alt=""></img>
        </div>
        <div class="second_flex">
            <div class="main_text">
                Secure and Stremline
            </div>
            <div class="child_text">
                Export Network Solutions Tailored for Startup Success.
            </div>
            <div class="btn_div">
                <div> <button class="started_btn">Get Started</button></div>
                <div><button class="learn_btn">Learn More</button></div>
            </div>
        </div>

    </div>
    <div class="fotter">
        <div class="fotter_main_div">
            <div class="flex_item1">
         <font> Bay</font>Developers 
                <div class="text_div">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rerum unde tempori
                </div>
                <div class="icons">
                  <BsTwitter/> 
                  <BsInstagram/>
                  <BsFacebook/>
                  <BsYoutube/>

                
                </div>
            </div>

            <div class="flex_item2">
                Quick Links
                <div class="links_text">
                    <span>About Us</span>
                    <span>Service </span>
                    <span>Pricing </span>
                </div>
            </div>
            <div class="flex_item3">
                Contact Us
                <div class="links_text"><span>
                        hello@website.com
                    </span>
                    <span>123 Main Street, Sacramento CA</span>

                
                <span>
                    123-456-789
                </span>
            </div>
        </div>
        </div>

    </div>
    
    </header>
  );
};
