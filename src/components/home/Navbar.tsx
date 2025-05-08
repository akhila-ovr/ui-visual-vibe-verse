import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex w-full max-w-[1240px] items-stretch gap-5 text-[#00373E] tracking-[0.5px] flex-wrap justify-between max-md:max-w-full">
      <div className="flex items-stretch gap-[40px_68px] text-lg font-normal whitespace-nowrap my-auto">
        <div className="text-[#00373E] cursor-pointer hover:underline">
          Home
        </div>
        <div className="text-[#00373E] cursor-pointer hover:underline">
          About
        </div>
      </div>
      <div className="flex items-stretch gap-[40px_100px] flex-wrap max-md:max-w-full">
        <div className="text-[#00373E] text-[50px] font-bold leading-[91px] capitalize max-md:text-[40px] max-md:leading-[81px]">
          TeamWise
        </div>
        <div className="text-[#00373E] text-lg font-normal my-auto">
          Project Website
        </div>
      </div>
    </div>
  );
};

export default Navbar;
