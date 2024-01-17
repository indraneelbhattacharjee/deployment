import { Button } from "@mui/material";
import React from "react";

export const ServicesPage = () => {
  return (
    <div>
      <div className="relative bg-additional-black w-full h-full overflow-hidden text-center text-xl text-black font-poppins">
        <div className="relative top-[0vh] left-[70vw] font-semibold inline-block w-[40vw] h-[20vh]">
          <p className="m-0">Web</p>
          <p className="m-0">Development</p>
          <img
          className="relative top-[0px] left-[0px] w-[262px] h-[286px] object-cover"
          alt=""
          src="img/web-development-1@2x.png"
        />
        <Button
          className="absolute top-[717px] left-[1145px]"
          sx={{ width: 150 }}
          color="error"
          name="View Service"
          size="medium"
          variant="contained"
        >
          View Service
        </Button>
        </div>
        <div className="absolute top-[809px] left-[1040px] font-semibold inline-block w-[358px] h-[147px]">
          <p className="m-0">UI/UX</p>
          <p className="m-0">Development</p>
          <img
          className="absolute top-[450px] left-[1080px] w-[279px] h-[338px] object-cover"
          alt=""
          src="img/uiux-development-1@2x.png"
        />
        <Button
          className="absolute top-[717px] left-[1145px]"
          sx={{ width: 150 }}
          color="error"
          name="View Service"
          size="medium"
          variant="contained"
        >
          View Service
        </Button>
        </div>
        <div className="absolute top-[809px] left-[703px] font-semibold inline-block w-[358px] h-[147px]">
          <p className="m-0">Application</p>
          <p className="m-0">Development</p>
          <img
          className="absolute top-[450px] left-[751px] w-[262px] h-[338px] object-cover"
          alt=""
          src="img/application-development-1@2x.png"
        />
        <Button
          className="absolute top-[717px] left-[1145px]"
          sx={{ width: 150 }}
          color="error"
          name="View Service"
          size="medium"
          variant="contained"
        >
          View Service
        </Button>
        </div>
        <div className="absolute top-[61px] left-[1007px] font-semibold inline-block w-[424px] h-[125px]">
          <p className="m-0">Software</p>
          <p className="m-0">Development</p>
          <img
          className="absolute top-[140px] left-[1080px] w-[279px] h-[286px] object-cover"
          alt=""
          src="img/software-development-1@2x.png"
        />
        <Button
          className="absolute top-[717px] left-[1145px]"
          sx={{ width: 150 }}
          color="error"
          name="View Service"
          size="medium"
          variant="contained"
        >
          View Service
        </Button>
        </div>

      </div>
            <div className="relative top-[0px] left-[0px] bg-black w-[50vw] h-[100vh] overflow-hidden text-5xl text-additional-white font-heading-h6">
            <div className="relative top-[-500px] left-[0px] rounded-[50%] [background:linear-gradient(179.94deg,_rgba(250,_99,_96,_0.06),_rgba(255,_255,_255,_0))] w-[40vw] h-[40vw]" />
            <div className="relative top-[-500px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_rgba(250,_99,_96,_0.15),_rgba(255,_255,_255,_0))] w-[30vw] h-[30vw]" />
            <div className="relative top-[80vh] left-[10vw] flex flex-col items-center justify-start gap-[12px]">
              <b className="relative tracking-[0.2px] leading-[125%]">
                Network Infrastructure Solutions
              </b>
              <div className="relative text-sm leading-[160%] text-greyscale-50 opacity-[0.7]">
                Everything you need in one dashboard.
              </div>
            </div>
            <img
              className="relative top-[50vh] left-[10px] object-cover"
              alt=""
              src="img/baydevelopslogo-1-1@2x.png"
            />
          </div>
    </div>
  );
};

export default ServicesPage;
