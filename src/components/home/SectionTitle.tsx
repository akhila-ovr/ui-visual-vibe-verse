import React from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      {subtitle && (
        <div className="text-[rgba(0,55,62,1)] text-sm font-medium tracking-[0.5px] text-center mt-[78px] max-md:mt-10">
          {subtitle}
        </div>
      )}
      <div className="text-[#00373E] text-center text-[52px] font-bold tracking-[0.5px] w-[570px] mt-[13px] max-md:max-w-full max-md:text-[40px]">
        {title}
      </div>
      {description && (
        <div className="text-[rgba(0,55,62,1)] text-[22px] font-normal leading-[34px] tracking-[0.5px] text-center w-[476px] mt-3.5">
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
