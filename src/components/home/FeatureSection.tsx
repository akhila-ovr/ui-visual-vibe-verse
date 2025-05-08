import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "Misaligned goals & expectations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      backgroundColor: "bg-[rgba(239,192,29,0.3)]"
    },
    {
      title: "Uneven participation & accountability",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      backgroundColor: "bg-[rgba(76,203,187,0.3)]"
    },
    {
      title: "Time\nConstraints",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      backgroundColor: "bg-[rgba(243,156,172,0.3)]"
    }
  ];

  return (
    <div className="w-full max-w-[1241px] mt-20 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {features.map((feature, index) => (
          <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
            <FeatureCard
              title={feature.title}
              description={feature.description}
              backgroundColor={feature.backgroundColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
