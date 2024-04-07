import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import { About } from "./components/About";
//import { About } from "./components/AppDevServicePage.js";

import { Contact } from "./components/Contact";
import { Landing } from "./components/landing";
import { EmployeeLogin } from "./components/employee_login";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { EmployeeRegister } from "./components/employee_register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
import { ProfilePage } from "./components/ProfilePage";
import {ServicesPage} from "./components/ServicesPage";
import { VerifyEmailPage } from "./components/VerifyEmailPage";
import { CreditCardForm } from "./components/paymentPage";
import { ResetPassword } from "./components/resetpassword";
import {EMS} from "./components/ems.tsx";
import {UserDash} from "./components/UserDashboard.js";
import { UIUXDevServicePage } from "./components/UIUXDevServicePage";
import { WebDevServicePage } from "./components/WebDevServicePage";
import { AppDevServicePage } from "./components/AppDevServicePage";
import { SoftwareDevServicePage } from "./components/SoftwareDevServicePage";
import SmoothScroll from "smooth-scroll";
import "./index.css";
import ChatBot from 'react-simple-chatbot';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});



//page routes:

const App = () => {
  const [chatTrigger, setChatTrigger] = useState(null);
  const handleChatTrigger = (trigger) => {
    setChatTrigger(trigger);
    
    setTimeout(() => {
      setChatTrigger(null);
    }, 1000);
  }
  return (
    <>
    <Router>
        <NavBarLogic />
      {isLoggedIn ? (
                // If logged in, display side navigation bar
                <>
                    <SideNavDark />
                </>
            ) : (
                // If logged out, display top navigation bar
                <>
                    <TopNav />
                </>
            )}
    
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path ="/uiux-services" element={<UIUXDevServicePage />} />     
        <Route path="/webDev-services" element={<WebDevServicePage />} /> 
      
        <Route path="/software-services" element={<SoftwareDevServicePage />} />  
        
        
        <Route path="/appDev-services" element ={<AppDevServicePage />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/employee_login" element={<EmployeeLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employee_register" element={<EmployeeRegister />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path ="/paymentPage" element={<CreditCardForm/>}/>
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user-dashboard" element={<UserDash />} />
        <Route path="/ems" element={<EMS />} />
        {/* Add other routes as needed */}
      </Routes>
      </Router>
      <ChatBot
    steps={[
      {
        id: '1',
        message: 'Welcome to Bay Develops, what can we help you with today?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Products', trigger: handleChatTrigger('/services') },
          { value: 2, label: 'Sign up!', trigger: handleChatTrigger('/register') },
          { value: 3, label: 'Learn about us', trigger: handleChatTrigger('/about') },
          { value: 4, label: 'Contact us', trigger: handleChatTrigger('/contact') }
        ],
        
      },
      {
        id: '3',
        message: 'Redirecting...',
        trigger: () => chatTrigger,
        waitAction: true,
      },

    ]}
  />
    </>

    
  );
};

export default App;