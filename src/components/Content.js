// This code is imported into the VerifyEmailPage file
// This code provides the main elements to the verify email page

import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const Content = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form className="m-0 self-stretch rounded-2xl bg-additional-white flex flex-col items-center justify-center p-10 gap-[32px] mq700:gap-[32px] mq925:pt-[26px] mq925:pb-[26px] mq925:box-border">
      <img
        className="w-[151.6px] h-[132px] relative"
        loading="eager"
        alt=""
        src="./img/Vector-girl.svg"
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
        <h3 className="m-0 self-stretch relative text-5xl tracking-[0.2px] leading-[125%] font-bold font-body-medium-regular text-greyscale-900 text-center mq450:text-lgi mq450:leading-[24px]">
          Verify your Email
        </h3>
        <h6 className="m-0 self-stretch relative text-sm leading-[160%] font-normal font-body-medium-regular text-greyscale-500 text-center">
          Thank you, check your email for instructions to reset your password
        </h6>
      </div>
      <TextField
        className="[border:none] bg-[transparent] self-stretch h-14 font-body-medium-regular text-base text-lightslategray"
        placeholder="Reset Code"
        variant="outlined"
        type="number"
        InputProps={{
          startAdornment: (
            <img width="24px" height="24px" src="./img/mailicon.svg" />
          ),
        }}
        sx={{
          "& fieldset": { borderColor: "#e2e8f0" },
          "& .MuiInputBase-root": {
            height: "56px",
            paddingLeft: "16px",
            borderRadius: "12px",
          },
          "& .MuiInputBase-input": { paddingLeft: "12px", color: "#94a3b8" },
        }}
      />
      <TextField
        className="[border:none] bg-[transparent] self-stretch h-14 font-body-medium-regular text-base text-lightslategray"
        color="primary"
        label="New Password"
        fullWidth={true}
        variant="outlined"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleShowPasswordClick}
                aria-label="toggle password visibility"
              >
                <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ "& .MuiInputBase-root": { height: "56px" } }}
      />
      <TextField
        className="[border:none] bg-[transparent] self-stretch h-14 font-body-medium-regular text-base text-lightslategray"
        color="primary"
        label="Confirm Password"
        fullWidth={true}
        variant="outlined"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleShowPasswordClick}
                aria-label="toggle password visibility"
              >
                <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ "& .MuiInputBase-root": { height: "56px" } }}
      />
      <Button
        className="self-stretch h-14"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#141416",
          borderRadius: "12px",
          "&:hover": { background: "#141416" },
          height: 56,
        }}
      >
        Reset Password
      </Button>
      <a className="[text-decoration:none] relative text-sm leading-[160%] text-center">
        <span className="font-body-medium-regular text-greyscale-900">
          Didn’t receive an email?
        </span>
        <b className="font-body-medium-regular text-royalblue"> Resend</b>
      </a>
    </form>
  );
};

export default Content;
