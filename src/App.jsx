import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About } from "./components/About";
//import { About } from "./components/AppDevServicePage.js";

import { ContactUs } from "./components/ContactUs";
import { Landing } from "./components/landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
import {ServicesPage} from "./components/ServicesPage";
import { Resetpassword } from "./components/resetpassword";
import {EMS} from "./components/ems.tsx";
<<<<<<< HEAD
import { CreditCardForm } from "./components/paymentPage";
=======
//import {App} from "./components/UserDashboard.js";
>>>>>>> e21961dcd181dcf3d4757be1cadc7a0d72403a60
import SmoothScroll from "smooth-scroll";
import "./index.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

//page routes:

const App = () => {
  return (
    <Router>
      <TopNav />
      <SideNavDark />
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path ="/paymentPage" element={<CreditCardForm/>}/>
        
        {/* Add other routes as needed      */}
      </Routes>
    </Router>
  );
};

export default App;