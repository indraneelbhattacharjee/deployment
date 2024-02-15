// Content is another file that holds all the code to provide most of this page its elements

import Content from "./components/Content";

const VerifyEmailPage = () => {
  return (
    <div className="w-full relative bg-additional-white overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[82px] box-border gap-[41px] tracking-[normal] mq700:gap-[41px] mq925:flex-wrap">
      <div className="h-[346px] w-[437px] flex flex-col items-start justify-end py-0 px-0 box-border min-w-[437px] max-w-full mq700:min-w-full mq925:flex-1">
        <img
          className="w-[500px] h-[500px] relative object-cover shrink-0 max-w-[114%] mq925:self-stretch mq925:w-auto"
          alt=""
          src="./img/bayDevelopsLogo(black).png"
        />
      </div>
      <div className="w-[484px] flex flex-col items-start justify-start pt-[82px] px-0 pb-0 box-border min-w-[484px] max-w-full mq700:min-w-full mq450:pt-[34px] mq450:box-border mq925:flex-1 mq925:pt-[53px] mq925:box-border">
        <Content />
      </div>
    </div>
  );
};

export default VerifyEmailPage;
