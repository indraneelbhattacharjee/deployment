import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About } from "./components/About";
//import { About } from "./components/AppDevServicePage.js";

//import { Contact } from "./components/Contact";
import { Landing } from "./components/landing";
//import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
import {ServicesPage} from "./components/ServicesPage";
//import {VerifyEmailPage} from "./components/VerifyEmailPage";
//import { Resetpassword } from "./components/resetpassword";
import {EMS} from "./components/ems.tsx";
import {ProfilePage} from "./components/ProfilePage";
import {UserDash} from "./components/UserDashboard";
import { CreditCardForm } from "./components/paymentPage";
import {AppDevServicePage} from "./components/AppDevServicePage";
import {SoftwareDevServicePage} from "./components/SoftwareDevServicePage";
import {WebDevServicePage} from "./components/WebDevServicePage";
import {UIUXDevServicePage} from "./components/UIUXDevServicePage";
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
      <TopNav />

      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/software-services" element={<SoftwareDevServicePage/>} />
        <Route path="/webDev-services" element={<WebDevServicePage/>} />
        <Route path="/uiux-services" element={<UIUXDevServicePage/>} />
        <Route path="/appDev-services" element={<AppDevServicePage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/user-dashboard" element={<UserDash/>} />
        <Route path="/ems" element={<EMS/>} />
        <Route path ="/paymentPage" element={<CreditCardForm/>}/>
        {/* Add other routes as needed      */}
      </Routes>
    </Router>
  );
};

export default App;