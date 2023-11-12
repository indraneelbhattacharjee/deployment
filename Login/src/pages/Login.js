import { useState } from "react";

const Login = () => {
  
  return (
    <div className="relative w-full flex flex-row items-center justify-between text-center text-5xl text-additional-white font-body-small-regular">
      <div className="bg-gray w-[708px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[122px] px-[92px] box-border gap-[48px]">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[524px] shrink-0"
          alt=""
          src="/baydevelopslogo.svg"
        />
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
          <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
            <h2 className="m-0 relative text-inherit tracking-[0.2px] leading-[125%] font-bold font-inherit">
              Network Infrastructure Solutions
            </h2>
            <div className="relative text-sm leading-[160%] text-greyscale-50 opacity-[0.7]">
              Everything you need in an one dashboard.
            </div>
          </div>
        </div>
      </div>
        <div className="bg-additional-white w-[732px] h-[880px] overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[204px] px-[164px] pb-[151px] box-border gap-[16px] text-left text-greyscale-900">
          <div className="self-stretch h-56 overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[32px]">
              <div className="w-[404px] overflow-hidden flex flex-col items-start justify-center">
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <h2 className="m-0 relative text-inherit tracking-[0.2px] leading-[125%] font-bold font-inherit">
                    Sign In to your Account
                  </h2>
                <div className="relative text-sm leading-[160%] text-greyscale-500">
                  Welcome back! please enter your detail
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
     
  );
};

export default Login;
