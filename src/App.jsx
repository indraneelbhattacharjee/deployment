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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path ="/paymentPage" element={<CreditCardForm/>}/>
        
        {/* Add other routes as needed      */}
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