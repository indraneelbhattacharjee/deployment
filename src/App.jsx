import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from "./components/About";
//import { About } from "./components/AppDevServicePage.js";
import { Contact } from "./components/Contact.js";
import { Landing } from "./components/landing";
import { EmployeeLogin } from "./components/employee_login";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { EmployeeRegister } from "./components/employee_register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
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
  return (
    <Router>
      <TopNav />
    
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
  );
};

export default App;