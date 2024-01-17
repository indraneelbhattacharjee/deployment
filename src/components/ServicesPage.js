import { Button } from "@mui/material";
import React from "react";

export const ServicesPage = () => {
  return (
    <div>
      
      <div className="relative top-[0px] left-[50px] bg-black w-[50vw] h-[100vh] text-5xl text-additional-white font-heading-h6">
        <div className="relative top-[15vh] left-[5vw] rounded-[50%] [background:linear-gradient(180deg,_rgba(250,_99,_96,_0.10),_rgba(255,_255,_255,_0))] w-[40vw] h-[40vw]" />
        <div className="relative top-[-47.5vh] left-[10vw] rounded-[50%] [background:linear-gradient(180deg,_rgba(250,_99,_96,_0.15),_rgba(255,_255,_255,_0))] w-[30vw] h-[30vw]" />
        <div className="relative top-[80vh] left-[10vw] flex flex-col items-center justify-start gap-[12px]">
          <b className="relative top-[-120vh] left-[-10vw] tracking-[0.2px] leading-[125%]">
            Network Infrastructure Solutions
          </b>
          <div className="relative top-[-120vh] left-[-10vw] text-sm leading-[160%] text-greyscale-50 opacity-[0.7]">
            Everything you need in one dashboard.
          </div>
        </div>
        <img
          className="relative top-[-90vh] left-[5.5vw] object-cover"
          alt=""
          src="img/baydevelopslogo-1-1@2x.png"/>
      </div>
      <div className="absolute bg-additional-black w-[50vw] h-[50vh] top-[0] left-[50vw] text-center text-xl text-black font-poppins">
        <div className="relative top-[0vh] left-[-3vw] font-semibold inline-block">
          <p className="m-0">Web</p>
          <p className="m-0">Development</p>
          <img
          className="relative top-[0px] left-[0px] w-[262px] h-[286px] object-cover"
          alt=""
          src="img/web-development-1@2x.png"
        />
        <Button
          sx={{ width: 150 }}
          color="error"
          name="View Service"
          size="medium"
          variant="contained"
        >
          View Service
        </Button>
        </div>
        <div className="absolute top-[0px] left-[49vh] font-semibold inline-block w-[424px] h-[125px]">
          <p className="m-0">Software</p>
          <p className="m-0">Development</p>
          <img
          className="relative top-[0px] left-[0px] w-[262px] h-[286px] object-cover"
          alt=""
          src="img/software-development-1@2x.png"
        />
        <Button
          className="relative top-[110] left-[-210px]"
          sx={{ width: 150 }}
          color="error"
          name="View Service"
          size="medium"
          variant="contained"
        >
          View Service
        </Button>
        </div>
        <div className="relative bg-additional-black w-[50vw] h-[50vh] top-[15] left-[-3vw] text-center text-xl text-black font-poppins">
          <img
          className="relative top-[0px] left-[0px] w-[262px] h-[286px] object-cover"
          alt=""
          src="img/application-development-1@2x.png"
        />
        <Button
          className="relative top-[110px] left-[-200px]"
          sx={{ width: 150 }}
          color="error"
          name="View Service"
          size="medium"
          variant="contained"
        >
          View Service
        </Button>
        <p className="m-0">Application</p>
        <p className="m-0">Development</p>
        </div>
        <div className="absolute top-[50vh] left-[49vh] font-semibold inline-block w-[424px] h-[125px]">
          <img
          className="relative top-[0px] left-[0px] w-[262px] h-[286px] object-cover"
          alt=""
          src="img/uiux-development-1@2x.png"
          />
          <Button
            className="relative top-[110] left-[-210px]"
            sx={{ width: 150 }}
            color="error"
            name="View Service"
            size="medium"
            variant="contained"
          >
            View Service
          </Button>
          <p className="m-0">UI/UX</p>
          <p className="m-0">Development</p>
        </div>
        

      </div>
    
    </div>
  );
};

export default ServicesPage;