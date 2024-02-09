import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";

export const TopNav = () => {
  return (
    <div className="relative bg-black w-full overflow-hidden flex flex-col items-center justify-center text-left text-base text-white font-abeezee">
      <div className="self-stretch bg-gray flex flex-row items-center justify-between py-8 px-[98px]">
        <img
          className="relative w-[237px] h-[57px] object-cover"
          alt=""
          src="/img/baydevelopslogo-1-1@2x.png"
        />
        <div className="flex flex-row items-center justify-center gap-[32px]">
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
            Home
          </a>
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
            About Us
          </a>
          <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
            Our Service
          </a>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="relative leading-[24px]">Pages</div>
            <FormControl
              className="relative"
              sx={{ width: 24 }}
              variant="outlined"
            >
              <InputLabel color="primary" />
              <Select color="primary" name="Dropdown">
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Sign Up">Sign Up</MenuItem>
                <MenuItem value="Services">Services</MenuItem>
                <MenuItem value="About Us">About Us</MenuItem>
                <MenuItem value="Contact Us">Contact Us</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <Button
          sx={{ width: 198 }}
          color="error"
          name="Login"
          variant="contained"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default TopNav;
