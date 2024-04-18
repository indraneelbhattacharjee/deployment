// Content is another file that holds all the code to provide most of this page its elements

import { useState } from "react";
import { Link } from 'react-router-dom';
import { TextField, Button} from "@mui/material";
import axios from 'axios'; 

export const VerifyEmailPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendCode = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post('http://localhost:8080/api/send-verification-code', { email });
      setMessage("If your email is in our database, you will receive a code to reset your password.");
    } catch (error) {
      console.error('Error sending verification code:', error);
      setMessage("Failed to send verification code. Please try again.");
    }
  };
  return (
    <div className="w-full relative bg-additional-white overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[82px] box-border gap-[41px] tracking-[normal] mq700:gap-[41px] mq925:flex-wrap">
      <div className="h-[346px] w-[437px] flex flex-col items-start justify-end py-0 px-0 box-border min-w-[437px] max-w-full mq700:min-w-full mq925:flex-1">
      </div>
      <div className="w-[484px] flex flex-col items-start justify-start pt-[82px] px-0 pb-0 box-border min-w-[484px] max-w-full mq700:min-w-full mq450:pt-[34px] mq450:box-border mq925:flex-1 mq925:pt-[53px] mq925:box-border">
        <form onSubmit = {handleSendCode} className="m-0 self-stretch rounded-2xl bg-additional-white flex flex-col items-center justify-center p-10 gap-[32px] mq700:gap-[32px] mq925:pt-[26px] mq925:pb-[26px] mq925:box-border">
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
              Enter the email address associated with your account and we will send you a code to reset your password.
            </h6>
          </div>
          <TextField
            className="[border:none] bg-[transparent] self-stretch h-14 font-body-medium-regular text-base text-lightslategray"
            placeholder="Enter your Email"
            variant="outlined"
            type="email"
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
          <Button
            className="self-stretch h-14"
            type = "submit"
            disableElevation={true}
            variant="contained"
            component={Link}
            to="/reset-password"
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
            Continue
          </Button>
          <a className="[text-decoration:none] relative text-sm leading-[160%] text-center">
            <Link to="/login" className="[text-decoration:none] relative leading-[24px] text-[inherit]">Back to Sign In</Link>
          </a>
          <a className="[text-decoration:none] relative text-sm leading-[160%] text-center">
            <span className="font-body-medium-regular text-greyscale-900">
              Don't have an account?
            </span>
            <Link to="/register" className="[text-decoration:none] relative leading-[24px] text-[inherit]"> Sign Up</Link>
          </a>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
