import './App.css';

import { faHome, faChartBar, faEnvelope, faBoxOpen, faInfoCircle, faCog, faBeer, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  const logoSrc = `${process.env.PUBLIC_URL}/logoo.png`;
  return (

    <div className='flex_container' >
        <div className='sideb'>
        <div className='main_div' >
        <nav className="navbar">
          <div className="logo">

            <img className='logo_image' src={logoSrc} alt="logo" />
            <hr />
          </div>
          <a href="#"><FontAwesomeIcon icon={faBeer} /> <font> Overview </font></a>

          <a href="#"><FontAwesomeIcon icon={faChartBar} /> <font> Analytics</font></a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} /> <font> Contact us </font></a>
          <a href="#"><FontAwesomeIcon icon={faBoxOpen} /> <font> Products </font></a>
          <a href="#"><FontAwesomeIcon icon={faInfoCircle} /> <font> About us</font></a>
        </nav>
        <div className="navbara">
          <a href="#" className='logou'><FontAwesomeIcon icon={faCog} /> <font> Settings </font></a>
          <a href="#" className='logou'><FontAwesomeIcon icon={faSignOutAlt} /> <font> logout </font></a>


        </div>
        </div>
   
        </div>
        <div className='center_div'>
<div className='projects_analytics'>
<div className='projanaly'>
<div className='projec'>
      <font className='projects_text'>Projects </font>
</div>
<div className='analytics'>
<font className='projects_text'>Analytics </font>
</div>
</div>
<div className='idnames'>
      <div>
    {/* <h4>John D.</h4> */}
    <img className='person_image' src={logoSrc} alt="logo" />
   <font className='john_text'>Title </font> <br />
    <font className='project_text'>Name </font>
      </div>
      <div className='to_do'>
      <font className='projects_text'>To-Do </font>
      </div>
</div>
</div>
<div className='project_recommendation'>
<font className='projects_text'>Project Recommendations  </font>
</div>
        </div>
        
 </div>

  );
}

export default App;
