import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import { About } from "./components/About";
import { About } from "./components/AppDevServicePage.js";

import { ContactUs } from "./components/ContactUs";
import { Landing } from "./components/landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
import {ServicesPage} from "./components/ServicesPage";
import { Resetpassword } from "./components/resetpassword";
import {EMS} from "./components/ems.tsx";
import {App} from "./components/UserDashboard.js";
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
        <Route path="/register" element={<Register />} />
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