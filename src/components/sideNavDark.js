import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export const SideNavDark = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/logout');
      if (response.status === 200) {
        console.log('Logout successful');
        // Perform any client-side cleanup
        navigate('/login'); // Redirect to the home page or login page
      }
    } catch (error) {
      console.error('Logout failed:', error.response || error);
    }
  };

  const location = useLocation();

  //paths for user and employee
  const userPaths = ['/user-dashboard', '/contact', '/services', '/about', '/profile', '/login'];
  const employeePaths = ['/ems', '/contact', '/services', '/about', '/profile', '/login'];

  // Check if the current path is included in userPaths or employeePaths
  const isUserPage = userPaths.includes(location.pathname);
  const isEmployeePage = employeePaths.includes(location.pathname);

  return (
    <div className="relative bg-gray-100 w-full h-[900px] overflow-hidden mix-blend-normal text-left text-sm text-greyscale-500 font-body-medium-medium">
      <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[237px] h-[900px] overflow-hidden">
        <div className="absolute top-[32px] left-[32px] w-[139.8px] h-[29px] hidden text-4xl-2 text-greyscale-900">
          <img className="relative w-0 h-0 hidden" alt="" src="/exclude2.svg" />
          <b className="absolute top-[0%] left-[26.54%] tracking-[-0.29px] leading-[125%] hidden">
            Hiphonic
          </b>
        </div>
        <div className="absolute top-[136px] left-[16px] bg-gray-100 flex flex-col items-start justify-start gap-[8px]">
          {isUserPage && (
            <>
              <a className="[text-decoration:none] rounded-xl bg-gray-200 w-[218px] h-12 flex flex-row items-center justify-start py-0 px-4 box-border gap-[16px] text-additional-white">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/layoutgrid1.svg"
                />
                <Link to="/user-dashboard" className="relative leading-[160%]">Overview</Link>

                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/analyticsline1.svg"
                />
                <Link to="/user-dashboard" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Analytics
                </Link>

                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/shoppingcartdiscount1.svg"
                />
                <Link to="/contact" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Contact Us
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/briefcase1.svg"
                />
                <Link to="/services" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Products
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/user1.svg"
                />
                <Link to="/about" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  About Us
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/settings1.svg"
                />
                <Link to="/profile" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Settings
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/logout1.svg"
                />
                <button onClick={handleLogout} type="sub" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Log Out
                </button>
              </a>
            </>
          )}
          {isEmployeePage && (
            <>
              <a className="[text-decoration:none] rounded-xl bg-gray-200 w-[218px] h-12 flex flex-row items-center justify-start py-0 px-4 box-border gap-[16px] text-additional-white">
              <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/layoutgrid1.svg"
                />
                <Link to="/ems" className="relative leading-[160%]">Overview</Link>

                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/analyticsline1.svg"
                />
                <Link to="/ems" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Analytics
                </Link>

                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/shoppingcartdiscount1.svg"
                />
                <Link to="/contact" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Contact Us
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/briefcase1.svg"
                />
                <Link to="/services" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Products
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/user1.svg"
                />
                <Link to="/about" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  About Us
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/settings1.svg"
                />
                <Link to="/profile" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Settings
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/logout1.svg"
                />
                <button onClick={handleLogout} type="sub" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Log Out
                </button>
              </a>
            </>
          )}
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[238px] h-[88px] object-cover"
        alt=""
        src="/img/baydevelopslogo-1-1@2x.png"
      />
    </div>
  );
};

/*
return (
  <div className="relative bg-gray-100 w-full h-[900px] overflow-hidden mix-blend-normal text-left text-sm text-greyscale-500 font-body-medium-medium">
    <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[237px] h-[900px] overflow-hidden">
      <div className="absolute top-[32px] left-[32px] w-[139.8px] h-[29px] hidden text-4xl-2 text-greyscale-900">
        <img className="relative w-0 h-0 hidden" alt="" src="/exclude2.svg" />
        <b className="absolute top-[0%] left-[26.54%] tracking-[-0.29px] leading-[125%] hidden">
          Hiphonic
        </b>
      </div>
      <div className="absolute top-[136px] left-[16px] bg-gray-100 flex flex-col items-start justify-start gap-[8px]">
        <a className="[text-decoration:none] rounded-xl bg-gray-200 w-[218px] h-12 flex flex-row items-center justify-start py-0 px-4 box-border gap-[16px] text-additional-white">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/img/sideNav/layoutgrid1.svg"
          />
          <Link to="/user-dashboard" className="relative leading-[160%]">Overview</Link>
        </a>
        <a className="[text-decoration:none] rounded-xl w-[218px] h-12 flex flex-row items-center justify-start py-0 px-4 box-border gap-[16px] text-[inherit]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/img/sideNav/analyticsline1.svg"
          />
          <Link to="/user-dashboard" className="relative tracking-[0.2px] leading-[160%] font-medium">
            Analytics
          </Link>
        </a>
        <a className="[text-decoration:none] rounded-xl w-[218px] h-12 flex flex-row items-center justify-start py-0 px-4 box-border gap-[16px] text-[inherit]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/img/sideNav/shoppingcartdiscount1.svg"
          />
          <Link to="/contact" className="relative tracking-[0.2px] leading-[160%] font-medium">
            Contact Us
          </Link>
        </a>
        <a className="[text-decoration:none] rounded-xl w-[218px] h-12 flex flex-row items-center justify-start py-0 px-4 box-border gap-[16px] text-[inherit]">
          <img
            className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
            alt=""
            src="/img/sideNav/briefcase1.svg"
          />
          <Link to="/services" className="relative tracking-[0.2px] leading-[160%] font-medium">
            Products
          </Link>
        </a>
        <a className="[text-decoration:none] rounded-xl w-[218px] h-12 flex flex-row items-center justify-start py-0 px-4 box-border gap-[16px] text-[inherit]">
          <img
            className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
            alt=""
            src="/img/sideNav/user1.svg"
          />
          <Link to="/about" className="relative tracking-[0.2px] leading-[160%] font-medium">
            About Us
          </Link>
        </a>
      </div>
      <a className="[text-decoration:none] absolute top-[764px] left-[16px] rounded-xl bg-gray-100 w-[218px] h-12 flex flex-row items-center justify-start py-0 px-4 box-border gap-[16px] text-[inherit]">
        <img
          className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
          alt=""
          src="/img/sideNav/settings1.svg"
        />
        <Link to="/profile" className="relative tracking-[0.2px] leading-[160%] font-medium">
          Settings
        </Link>
      </a>
      <a className="[text-decoration:none] absolute top-[820px] left-[16px] rounded-xl bg-gray-100 w-[218px] h-12 flex flex-row items-center justify-start py-0 px-4 box-border gap-[16px] text-[inherit]">
        <img
          className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
          alt=""
          src="/img/sideNav/logout1.svg"
        />
        <button onClick={handleLogout} type="sub" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Log Out
        </button>
      </a>
      <div className="absolute top-[87.5px] left-[-0.5px] box-border w-[251px] h-px border-t-[1px] border-solid border-additional-white" />
    </div>
    <img
      className="absolute top-[0px] left-[0px] w-[238px] h-[88px] object-cover"
      alt=""
      src="/img/baydevelopslogo-1-1@2x.png"
    />
    </div>
  );
};
*/

export default SideNavDark;