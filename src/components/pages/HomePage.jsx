import React from "react";
import Hero from "../Hero";
import AllProperty from "../AllProperty";
import Discover from "../Discover";
import Footer from "../layout/Footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AllProperty />
      <Discover />
      <Footer />
    </div>
  );
};

export default HomePage;
