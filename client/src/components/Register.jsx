import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
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
                Create your account.
              </h2>
              <div className="relative text-sm leading-[160%] text-greyscale-500">
                Welcome! please enter your detail
              </div>
            </div>
          </div>
          <div className="w-[404px] flex flex-col items-start justify-start gap-[16px]">
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="error"
              name="Email"
              label="Email"
              size="large"
              required={true}
              variant="outlined"
              type="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>mail_sharp</Icon>
                  </InputAdornment>
                ),
              }}
            />






            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="error"
              name="Password"
              label="Password"
              size="large"
              required={true}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>mail_sharp</Icon>
                  </InputAdornment>
                ),
              }}
            />











            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="error"
              name="Confirm Password"
              label=" Confirm Password"
              size="large"
              required={true}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>lock_sharp</Icon>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPasswordClick}
                      aria-label="toggle password visibility"
                    >
                      <Icon>
                        {showPassword ? "visibility_off" : "visibility"}
                      </Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[32px] text-center text-sm">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center text-left">
            <div className="w-[403px] h-6 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[145px]">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <FormControlLabel
                  className="relative"
                  label=""
                  control={<Checkbox color="error" defaultChecked />}
                />
                <div className="relative tracking-[0.2px] leading-[160%] font-medium">
                  Remember me
                </div>
              </div>
              <a className="[text-decoration:none] relative leading-[160%] font-bold text-primary-600-base text-right">
                Forgot Password?
              </a>
            </div>
          </div>
          <Button
            className="self-stretch"
            color="error"
            name="Sign In"
            size="large"
            variant="contained"
          >
            Register
          </Button>
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-xs text-greyscale-500">
            <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-greyscale-200" />
            <div className="relative leading-[160%]">Or sign in with</div>
            <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-greyscale-200" />
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center">
            <div className="w-[403px] flex flex-row items-start justify-start gap-[16px]">
              <Button className="flex-1" color="error" variant="contained">
                Google
              </Button>
              <Button className="flex-1" color="error" variant="contained">
                Facebook
              </Button>
            </div>
          </div>
          <a className="[text-decoration:none] relative leading-[160%] text-[inherit]">
            <span>
              <span>Don’t have an account?</span>
              <span className="tracking-[0.2px] font-medium font-body-small-regular">{` `}</span>
            </span>
            <b className="text-primary-600-base">Sign Up</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;