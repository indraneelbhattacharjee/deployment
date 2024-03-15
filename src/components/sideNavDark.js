import { Link } from 'react-router-dom';
import '../sidenav.css';//need to be connected properly

import { faHome, faChartBar, faEnvelope, faBoxOpen, faInfoCircle, faCog, faBeer, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function SideNavDark() {
  const logoSrc = `${process.env.PUBLIC_URL}/img/sideNav/logo.png`;
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
</div>

  );
}

export default SideNavDark;
