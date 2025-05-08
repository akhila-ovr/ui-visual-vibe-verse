import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[rgba(249,230,208,1)] w-full max-w-[1240px] mt-[30px] px-px rounded-[70px] max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[24%] max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d35d1fca0acc442f84bb0fcf6ee4af0a/df1de272c91a951cf64a4eb7742a50d864d00dc1?placeholderIfAbsent=true"
            alt="TeamWise illustration left"
            className="aspect-[0.59] object-contain w-full grow mt-[108px] max-md:mt-10"
          />
        </div>
        <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
          <div className="z-10 flex mr-[-107px] w-full flex-col items-center text-center tracking-[0.5px] mt-[166px] max-md:max-w-full max-md:mt-10">
            <div className="self-stretch text-[#00373E] max-md:max-w-full">
              <div className="text-[#00373E] text-2xl font-normal max-md:max-w-full">
                From shattered ideas to shared success
              </div>
              <div className="text-[#00373E] text-[70px] font-bold mt-[15px] max-md:max-w-full max-md:text-[40px]">
                Meetings made easy
              </div>
            </div>
            <button className="relative flex min-h-[54px] items-start gap-2.5 text-xl text-white font-semibold mt-[23px] px-[39px] py-3.5 max-md:px-5">
              <div className="absolute z-0 flex min-w-60 shrink-0 h-[54px] w-[393px] bg-[#00373E] rounded-[100px] inset-0" />
              <div className="z-0 my-auto">
                Add TeamWise to your meeting
              </div>
            </button>
            <div className="text-black text-lg font-semibold underline mt-5 cursor-pointer">
              I have a code
            </div>
          </div>
        </div>
        <div className="w-[29%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d35d1fca0acc442f84bb0fcf6ee4af0a/5216b3e141779ee4f2c33c9609a0553b42a61904?placeholderIfAbsent=true"
            alt="TeamWise illustration right"
            className="aspect-[0.61] object-contain w-full grow"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
