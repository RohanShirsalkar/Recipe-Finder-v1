import React from "react";
import Hero from "../components/hero/Hero";
import BigCard from "../components/big card/BigCard";
import InfoSection from "../components/info section/InfoSection";
import Uploader from "../components/common/Uploader";

const Home = () => {
  return (
    <div className="max-w-7xl md:marker:px-5 mx-auto">
      <div className="hero-section">
        <Hero />
      </div>
      <div id="recipe-section">
        <BigCard />
      </div>
      <div id="info-section">
        <InfoSection />
      </div>
      <div className="CTA-section mt-20 md:mt-0">
        <div className="mb-20">
          <h1 className="text-5xl font-bold text-center  text-slate-600">
            Just Snap and Cook!
          </h1>
          <h1 className="mt-2 text-lg text-center font-semibold text-slate-600">
            Get a recipe instantly
          </h1>
        </div>
        <div className="md:min-h-[calc(100vh-300px)] mb-4">
          <Uploader />
        </div>
      </div>
    </div>
  );
};

export default Home;
