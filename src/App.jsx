
import { ContactUs } from "./components/ContactUs";
import { Landing } from "./components/landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";
import { About } from "./components/About";
import {ServicesPage} from "./components/ServicesPage";
import { Resetpassword } from "./components/resetpassword";
//import { SoftwareDevServicePage } from "./components/SoftwareDevServicePage";
//import { WebDevServicePage } from "./components/WebDevServicePage";


import SmoothScroll from "smooth-scroll";
import "./index.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  
  return (
    <div>
      <ServicesPage/>
    </div>
  );
};

export default App;
