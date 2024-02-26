import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ContactUs } from "./components/ContactUs";
import { Landing } from "./components/landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
import { About } from "./components/About";
import {ServicesPage} from "./components/ServicesPage";
import { Resetpassword } from "./components/resetpassword";
import {EMS} from "./components/ems.tsx";
import { CreditCardForm } from "./components/paymentPage";
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