import React from "react";

const InfoSection = () => {
  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 min-h-[calc(100vh-100px)] text-slate-600 md:px-0 p-8 mb-8">
      <div className="col-span-1 self-center">
        <h1 className="text-4xl font-bold mb-4">
          Find Recipes Instantly with InstaRecipe Just Snap and Cook!
        </h1>
        <p className="text-lg mb-2">
          Discover the magic of InstaRecipe, your ultimate cooking companion!
          With just one click, you can identify recipes from any dish in
          seconds, thanks to InstaRecipe's innovative AI technology. Slash your
          cooking preparation time and bring more fun to your kitchen!
        </p>
      </div>
      <div className="col-span-1 self-center justify-self-center">
        <img src="public\snap.png" alt="alt_image" className="w-[250px]" />
      </div>
    </div>
  );
};

export default InfoSection;
