import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  backgroundColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, backgroundColor }) => {
  return (
    <div className={`${backgroundColor} flex grow flex-col items-stretch text-[rgba(0,55,62,1)] text-center tracking-[0.5px] w-full px-[42px] py-[55px] rounded-[59px] max-md:mt-10 max-md:px-5`}>
      <div className="text-3xl font-semibold self-center">
        {title}
      </div>
      <div className="text-lg font-normal leading-[26px] mt-[25px]">
        {description}
      </div>
    </div>
  );
};

export default FeatureCard;
