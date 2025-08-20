import React from "react";
import HeroLoggedin from "../HeroLoggedin";
import AllProperty from "../AllProperty";
import Discover from "../Discover";
import Footer from "../layout/Footer";

const HomeLoggedin = () => {
  return (
    <div>
      <HeroLoggedin />
      <AllProperty />
      <Discover />
      <Footer />
    </div>
  );
};

export default HomeLoggedin;
