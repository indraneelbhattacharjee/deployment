/*
import { Button } from "@mui/material";
import React from "react";



export const ServicesPage = () => {
  return (
    <div className="flex flex-row">
      <div className="w-3/4 h-screen bg-black text-5xl text-additional-white font-heading-h6">
        <div className="h-[15vh] bg-[linear-gradient(180deg,_rgba(250,_99,_96,_0.10),_rgba(255,_255,_255,_0))] rounded-[50%]" />
        <div className="h-[30vh] bg-[linear-gradient(180deg,_rgba(250,_99,_96,_0.15),_rgba(255,_255,_255,_0))] rounded-[50%]" />
        <div className="h-[40vh] flex flex-col items-center justify-start gap-12">
          <b className="tracking-[0.2px] leading-[180%]">Network Infrastructure Solutions</b>
          <div className="text-sm leading-[160%] text-greyscale-50 opacity-[0.7]">Everything you need in one dashboard.</div>
        </div>
        <img className="h-[10vh] object-cover" alt="" src="img/baydevelopslogo-1-1@2x.png" />
      </div>



      <div className="w-1/2 h-screen bg-additional-black flex flex-wrap justify-end items-center gap-2">
        <div className="w-[50%] h-[50%] bg-additional-black text-center text-xl text-black font-poppins">
          <div className="font-semibold inline-block">
            <p className="m-0">Web</p>
            <p className="m-0">Development</p>
            <img className="w-[262px] h-[286px] object-cover" alt="" src="img/web-development-1@2x.png" />
            <Button sx={{ width: 150 }} color="error" name="View Service" size="medium" variant="contained">View Service</Button>
          </div>
        </div>

        <div className="w-[50%] h-[50%] bg-additional-black text-center text-xl text-black font-poppins">
          <div className="font-semibold inline-block">
            
            <img className="w-[262px] h-[286px] object-cover" alt="" src="img/software-development-1@2x.png" />
            <Button sx={{ width: 150 }} color="error" name="View Service" size="medium" variant="contained">View Service</Button>
          </div>
          <div className="font-semibold inline-block">
          <p className="m-0">Application</p>
          <p className="m-0">Development</p>
          </div>
        </div>
      </div>

      
      <div className="w-1/2 h-screen bg-additional-black flex flex-wrap justify-center items-center gap-2">
        <div className="w-[50%] h-[50%] bg-additional-black text-center text-xl text-black font-poppins">
          <div className="font-semibold inline-block">
            <p className="m-0">Software</p>
            <p className="m-0">Development</p>
            <img className="w-[262px] h-[286px] object-cover" alt="" src="img/application-development-1@2x.png" />
            <Button sx={{ width: 150 }} color="error" name="View Service" size="medium" variant="contained">View Service</Button>
          </div>
        </div>



        <div className="w-[50%] h-[50%] bg-additional-black text-center text-xl text-black font-poppins">
          
            
            <img className="w-[262px] h-[286px] object-cover" alt="" src="img/uiux-development-1@2x.png" />
            <Button sx={{ width: 150, marginLeft: '50px' }} color="error" name="View Service" size="medium" variant="contained">View Service</Button>
            <div className="font-semibold inline-block">
          <p className="m-0">UI/UX</p>
          <p className="m-0">Development</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

*/

import { Button } from "@mui/material";
import React from "react";

export const ServicesPage = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 h-screen bg-black text-white flex flex-col justify-center items-center">
        <img className="h-[10vh] object-cover mb-4" alt="" src="img/baydevelopslogo-1-1@2x.png" />
        <div className="text-center">
          <b className="text-5xl font-heading-h6 mb-4">Network Infrastructure Solutions</b>
          <div className="text-sm opacity-70">Everything you need in one dashboard.</div>
        </div>
      </div>

      <div className="w-1/2 h-screen bg-additional-black flex flex-wrap justify-around items-start pt-8">
        <div className="w-[40%] mb-8 bg-black text-center text-xl text-white font-poppins p-6">
          <img className="w-full h-40 object-cover mb-4" alt="" src="img/web-development-1@2x.png" />
          <div className="font-semibold mb-4">
            <p className="m-0">Web</p>
            <p className="m-0">Development</p>
          </div>
          <Button sx={{ width: '100%' }} color="error" variant="contained">View Service</Button>
        </div>

        <div className="w-[40%] mb-8 bg-black text-center text-xl text-white font-poppins p-6">
          <img className="w-full h-40 object-cover mb-4" alt="" src="img/software-development-1@2x.png" />
          <div className="font-semibold mb-4">
            <p className="m-0">Software</p>
            <p className="m-0">Development</p>
          </div>
          <Button sx={{ width: '100%' }} color="error" variant="contained">View Service</Button>
        </div>

        <div className="w-[40%] bg-black text-center text-xl text-white font-poppins p-6">
          <img className="w-full h-40 object-cover mb-4" alt="" src="img/application-development-1@2x.png" />
          <div className="font-semibold mb-4">
            <p className="m-0">Application</p>
            <p className="m-0">Development</p>
          </div>
          <Button sx={{ width: '100%' }} color="error" variant="contained">View Service</Button>
        </div>

        <div className="w-[40%] bg-black text-center text-xl text-white font-poppins p-6">
          <img className="w-full h-40 object-cover mb-4" alt="" src="img/uiux-development-1@2x.png" />
          <div className="font-semibold mb-4">
            <p className="m-0">UI/UX</p>
            <p className="m-0">Development</p>
          </div>
          <Button sx={{ width: '100%' }} color="error" variant="contained">View Service</Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
