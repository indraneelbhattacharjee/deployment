import { Link, useLocation } from 'react-router-dom';

export const SideNavDark = () => {
  const location = useLocation();

  //paths for user and employee
  const userPaths = ['/UserDashboard', '/Contact', '/ServicesPage', '/About', '/ProfilePage', 'Login'];
  const employeePaths = ['/ems', '/Contact', '/ServicesPage', '/About', '/ProfilePage', 'Login'];

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
                <Link to="/UserDashboard" className="relative leading-[160%]">Overview</Link>

                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/analyticsline1.svg"
                />
                <Link to="/UserDashboard" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Analytics
                </Link>

                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/shoppingcartdiscount1.svg"
                />
                <Link to="/Contact" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Contact Us
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/briefcase1.svg"
                />
                <Link to="/ServicesPage" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Products
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/user1.svg"
                />
                <Link to="/About" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  About Us
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/settings1.svg"
                />
                <Link to="/ProfilePage" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Settings
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/logout1.svg"
                />
                <Link to="/Login" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Log Out
                </Link>
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
                <Link to="/Contact" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Contact Us
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/briefcase1.svg"
                />
                <Link to="/ServicesPage" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Products
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/user1.svg"
                />
                <Link to="/About" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  About Us
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/settings1.svg"
                />
                <Link to="/ProfilePage" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Settings
                </Link>

                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/sideNav/logout1.svg"
                />
                <Link to="/Login" className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Log Out
                </Link>
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

export default SideNavDark;
