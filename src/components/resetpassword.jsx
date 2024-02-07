import React from "react";

export const Resetpassword = (props) => {
  return (
    <header id="header">
    
    <div>

        <div class="logo_img">
            <img src="output-onlinepngtools 1.png" alt=""/>

        </div>
        <div class="main_div">
            <div class="reset_text">
                Reset your Password
            </div>
            <div class="text">
                Enter the email address associated with your account and we will send you a link to reset your password
            </div>
            <div class="input_div">
                <i  class="fa-regular fa-envelope"></i>
                <input id="inp" type="email"/>
            </div>
            <div>
                <button class="btn">Continue </button>
            </div>
            <div class="signin_text">
                Back to Sign in
            </div>
        </div>
        <div class="signup_text">
            Don't have an account? <font style="color: #2563eb; font-weight: 700; cursor: pointer;">Sign Up</font>
        </div>
    </div>

    
    </header>
  );
};
