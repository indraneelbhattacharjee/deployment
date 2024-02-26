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
//import {App} from "./components/UserDashboard.js";
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
      <Routes>
        <Route path="/about" element={<ContactUs />} />
        <Route path="/services" element={<EMS />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;