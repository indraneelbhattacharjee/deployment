
import { ContactUs } from "./components/ContactUs";
import { Landing } from "./components/landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { TopNav } from "./components/TopNavbar";
import { SideNavDark } from "./components/sideNavDark";



import SmoothScroll from "smooth-scroll";
import "./index.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  
  return (
    <div>
      <ContactUs/>

    </div>
  );
};

export default App;
