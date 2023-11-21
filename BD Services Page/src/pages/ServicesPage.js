import { Button } from "@mui/material";

const ServicesPage = () => {
  return (
    <div className="relative bg-additional-white w-full h-[900px] overflow-hidden text-center text-xl text-black font-poppins">
      <img
        className="absolute top-[140px] left-[751px] w-[262px] h-[286px] object-cover"
        alt=""
        src="/web-development-1@2x.png"
      />
      <img
        className="absolute top-[140px] left-[1080px] w-[279px] h-[286px] object-cover"
        alt=""
        src="/software-development-1@2x.png"
      />
      <img
        className="absolute top-[450px] left-[751px] w-[262px] h-[338px] object-cover"
        alt=""
        src="/application-development-1@2x.png"
      />
      <img
        className="absolute top-[450px] left-[1080px] w-[279px] h-[338px] object-cover"
        alt=""
        src="/uiux-development-1@2x.png"
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
      <Button
        className="absolute top-[717px] left-[804px]"
        sx={{ width: 156 }}
        color="error"
        name="View Service"
        size="medium"
        variant="contained"
      >
        View Service
      </Button>
      <Button
        className="absolute top-[379px] left-[1149px]"
        sx={{ width: 142 }}
        color="error"
        name="View Service"
        size="medium"
        variant="contained"
      >
        View Service
      </Button>
      <Button
        className="absolute top-[379px] left-[811px]"
        sx={{ width: 142 }}
        color="error"
        name="View Service"
        size="medium"
        variant="contained"
      >
        View Service
      </Button>
      <div className="absolute top-[61px] left-[703px] font-semibold inline-block w-[358px] h-[142px]">
        <p className="m-0">Web</p>
        <p className="m-0">Development</p>
      </div>
      <div className="absolute top-[809px] left-[1040px] font-semibold inline-block w-[358px] h-[147px]">
        <p className="m-0">UI/UX</p>
        <p className="m-0">Development</p>
      </div>
      <div className="absolute top-[809px] left-[703px] font-semibold inline-block w-[358px] h-[147px]">
        <p className="m-0">Application</p>
        <p className="m-0">Development</p>
      </div>
      <div className="absolute top-[61px] left-[1007px] font-semibold inline-block w-[424px] h-[125px]">
        <p className="m-0">Software</p>
        <p className="m-0">Development</p>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray w-[708px] h-[900px] overflow-hidden text-5xl text-additional-white font-heading-h6">
        <div className="absolute top-[132px] left-[92px] rounded-[50%] [background:linear-gradient(179.94deg,_rgba(250,_99,_96,_0.06),_rgba(255,_255,_255,_0))] w-[524px] h-[524px]" />
        <div className="absolute top-[210px] left-[170px] rounded-[50%] [background:linear-gradient(180deg,_rgba(250,_99,_96,_0.15),_rgba(255,_255,_255,_0))] w-[367px] h-[367px]" />
        <div className="absolute top-[704px] left-[157px] flex flex-col items-center justify-start gap-[12px]">
          <b className="relative tracking-[0.2px] leading-[125%]">
            Network Infrastructure Solutions
          </b>
          <div className="relative text-sm leading-[160%] text-greyscale-50 opacity-[0.7]">
            Everything you need in one dashboard.
          </div>
        </div>
        <img
          className="absolute top-[143px] left-[116px] w-[500px] h-[500px] object-cover"
          alt=""
          src="/baydevelopslogo-1-1@2x.png"
        />
      </div>
    </div>
  );
};

export default ServicesPage;
