import { Link } from 'react-router-dom';

export const SideNavDark = () => {
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
          <Link to="/login" className="relative tracking-[0.2px] leading-[160%] font-medium">
            Log Out
          </Link>
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

export default SideNavDark;
