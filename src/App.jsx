import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import { About } from "./components/About";
//import { About } from "./components/AppDevServicePage.js";
<<<<<<< HEAD
import { ContactUs } from "./components/ContactUs.jsx";
=======

import { Contact } from "./components/Contact";
>>>>>>> b39555fd9c6cfafa42b7b4a2ca170e0b30b466f8
import { Landing } from "./components/landing";
import { EmployeeLogin } from "./components/employee_login";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { EmployeeRegister } from "./components/employee_register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
<<<<<<< HEAD
import { ProfilePage } from "./components/ProfilePage"
import { UserDash } from "./components/UserDashboard"
import { ServicesPage } from "./components/ServicesPage";
import { VerifyEmailPage } from "./components/VerifyEmailPage";
import { ResetPassword } from "./components/resetpassword";
import { EMS } from "./components/ems.tsx";
import { CreditCardForm } from "./components/paymentPage"; 
//import {App} from "./components/UserDashboard.js";
import SmoothScroll from "smooth-scroll";
import "./index.css";
=======
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
//import { Chat } from "./components/Chat";


>>>>>>> b39555fd9c6cfafa42b7b4a2ca170e0b30b466f8

import { UIUXDevServicePage } from "./components/UIUXDevServicePage"
import { WebDevServicePage } from "./components/WebDevServicePage";
import { AppDevServicePage } from "./components/AppDevServicePage"
import { SoftwareDevServicePage } from "./components/SoftwareDevServicePage";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

//page routes:

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

function NavBarLogic() {
    const location = useLocation();

    const loggedInPaths = ['/services', '/ems'];
    const loggedOutPath = ['/login'];

    const loggedIn = loggedInPaths.includes(location.pathname);
    const loggedOut = loggedOutPath.includes(location.pathname);

    if(loggedIn){
        setIsLoggedIn(true);
    }   

    if(loggedOut){
        setIsLoggedIn(false);
    }
};


  return (
    <Router>
<<<<<<< HEAD
      <SideNavDark />
=======
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
>>>>>>> b39555fd9c6cfafa42b7b4a2ca170e0b30b466f8
    
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path ="/uiux-services" element={<UIUXDevServicePage />} />     
        <Route path="/webDev-services" element={<WebDevServicePage />} /> 
      
        <Route path="/software-services" element={<SoftwareDevServicePage />} />  
        
        
        <Route path="/appDev-services" element ={<UIUXDevServicePage />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/employee_login" element={<EmployeeLogin />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path="/contact" element={<ContactUs />} />
=======
        <Route path="/employee_register" element={<EmployeeRegister />} />
        <Route path="/contact" element={<Contact />} />
>>>>>>> b39555fd9c6cfafa42b7b4a2ca170e0b30b466f8
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path ="/paymentPage" element={<CreditCardForm/>}/>
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/user-dashboard" element={<UserDash />} />
        <Route path="/ems" element={<EMS />} />
        <Route path="/sidenav" element={<SideNavDark />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;