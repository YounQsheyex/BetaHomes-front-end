import React from "react";
import Navbar from "./layout/Navbar";
import BrosweProperty from "./BrosweProperty";
const Hero = () => {
  return (
    <div className="hero w-full lg:h-[680px] h-auto bg-[#666666]">
      <Navbar />
      <BrosweProperty />
    </div>
  );
};

export default Hero;
