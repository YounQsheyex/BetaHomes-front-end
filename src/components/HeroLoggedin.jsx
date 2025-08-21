import React from "react";
import NavLoggedin from "./layout/NavLoggedin";
import BrosweProperty from "./BrosweProperty";

const HeroLoggedin = () => {
  return (
    <div className="hero w-sm md:w-full lg:h-[680px] h-auto bg-[#666666]">
      <NavLoggedin />
      <BrosweProperty />
    </div>
  );
};

export default HeroLoggedin;
