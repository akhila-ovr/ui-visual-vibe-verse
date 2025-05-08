import React from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import SectionTitle from "../components/home/SectionTitle";
import FeatureSection from "../components/home/FeatureSection";

const Index: React.FC = () => {
  return (
    <main>
      <section className="bg-[rgba(247,246,244,1)] flex flex-col overflow-hidden items-center pt-10 pb-[74px] px-20 max-md:px-5">
        <Navbar />
        <HeroSection />
        
        <SectionTitle 
          subtitle="WHAT IS TEAMWISE"
          title="An AI facilitator to guide your meetings"
          description="A short description about TeamWise maybe?"
        />
        
        <FeatureSection />
      </section>
    </main>
  );
};

export default Index;
