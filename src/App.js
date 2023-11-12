import './App.css';
import './Bay_Develops_Top_Nav_Bar/src/global.css';
import './Bay_Develops_Top_Nav_Bar/tailwind.config.js';
import './Bay_Develops_Side_Nav_Bar/src/global.css';
import './Bay_Develops_Side_Nav_Bar/tailwind.config.js';
import About from './About';
import TopNavbar from './Bay_Develops_Top_Nav_Bar/src/components/TopNavbar';
import SideNavbar from './Bay_Develops_Side_Nav_Bar/src/pages/NavigationDark';

function App() {
  return (
    <>
        <TopNavbar />
        <SideNavbar />
        <About />
    </>
  );
}


export default App;