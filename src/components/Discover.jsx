import React from "react";
import { discover } from "../../utils/data.js";
import nairaw from "../assets/nairaw.png";
import whiteloc from "../assets/whiteloc.png";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Discover = () => {
  // const [currentImage, setCurrentImage] = useState(0);
  // const imagePershow = 3;
  // const totalImage = discover.length;

  // const currentI = discover.slice(currentImage, currentImage + imagePershow);

  // // Handlers
  // const goNext = () => {
  //   if (currentImage + imagePershow < totalImage) {
  //     setCurrentImage(currentImage + imagePershow);
  //   }
  // };

  // const goPrev = () => {
  //   if (currentImage - imagePershow >= 0) {
  //     setCurrentImage(currentImage - imagePershow);
  //   }
  // };

  return (
    <div className="mt-10 w-full lg:max-w-[1024px] mx-auto p-2">
      <div>
        <h1 className="font-[Outfit] font-[600] text-[50px] text-[#0f1a1e] text-center">
          Discover Our Popular Properties
        </h1>
      </div>
      <div className="mt-10 w-full lg:w-[1020px] lg:h-[412px] flex  gap-3 items-center lg:flex-row lg:justify-between overflow-y-auto scroll-smooth">
        {/* <button onClick={goPrev}>
          <FaArrowLeftLong />
        </button> */}
        {discover.map((d, index) => {
          return (
            <div
              key={index}
              className="w-[85%] sm:w-[45%] lg:w-[23%] flex-shrink-0 h-full rounded-[7px] relative"
            >
              <img
                src={d.image}
                alt="img"
                className="w-full lg:w-[290px] h-full rounded-[7px] object-cover"
              />
              <div className="w-full absolute bottom-0 left-0 px-4 backdrop-blur-[2px] bg-[#4A4A4C33] rounded-b-[7px]">
                <div>
                  <p className="mt-3 font-[600] font-[Outfit] text-[18px] text-[#ffffff]">
                    {d.title}
                  </p>
                </div>
                <div className="flex items-center gap-2 my-2">
                  <img
                    src={nairaw}
                    alt="naira"
                    className="w-[14px] h-[15.17px] object-cover"
                  />
                  <p className="font-[Outfit] font-[600] text-[18px] text-[#ffffff]">
                    {d.price}
                  </p>
                </div>
                <div className="flex items-center gap-3 my-2 font-[400] font-[Outfit] text-[14px] text-[#ffffff]">
                  <p>{d.bed}</p>
                  <p>|</p>
                  <p>{d.bath}</p>
                  <p>|</p>
                  <p>{d.feet}</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src={whiteloc} alt="location" className="object-cover" />
                  <p className="font-[Outfit] font-[400] text-[14.79px] text-[#ffffff]">
                    {d.location}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* <button onClick={goNext}>
          <FaArrowRightLong />
        </button> */}
      </div>
    </div>
  );
};

export default Discover;
