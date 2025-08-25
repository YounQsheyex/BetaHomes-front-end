import React from "react";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axiosInstance";
import { usePropertyContext } from "../hooks/usePropertyContext";

const BrosweProperty = () => {
  const [rooms, setRooms] = useState(0);
  const { handleSearch} = usePropertyContext();
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const increase = () => {
    setRooms(rooms + 1);
  };

  const decrease = () => {
    if (rooms > 0) {
      setRooms(rooms - 1);
    }
  };

  // const searchProperties = (locationQuery, bedroomsQuery) => {
  //   return properties.filter((property) => {
  //     const locationMatch = locationQuery
  //       ? property.location.toLowerCase().includes(locationQuery.toLowerCase())
  //       : true;

  //     const bedroomsMatch = bedroomsQuery
  //       ? property.bedrooms.toLowerCase().includes(bedroomsQuery.toLowerCase())
  //       : true;

  //     return locationMatch && bedroomsMatch;
  //   });
  // };
const handleSubmit = (e) => {
  e.preventDefault();
  handleSearch({ location, bedrooms }); // search via context
};

  return (
    <div className="w-full lg:max-w-[1024px] lg:h-[404px] mx-auto p-2">
      <div className="w-full lg:w-[988px] h-[217px] mx-auto flex flex-col justify-between  items-center">
        <h1 className="mt-10 lg:mt-5 w-full md:w-full h-[109px] font-[outfit] font-[700] text-[40px] lg:text-[68px] text-[#ffffff] lg:leading-0.5 text-center p-7">
          Browse Our Properties
        </h1>
        <p className="my-10 lg:my-5 w-[300px] lg:w-[784px] lg:h-[84px] font-[outfit] font-[400] text-[16px] lg:text-[26px] text-[#ffffff] text-center">
          Find your perfect home among our curated properties. Start browsing
          now!
        </p>
      </div>
      <div className="w-full bg-[#ffffff33] lg:h-[140px] lg:py-7 px-5 mt-15 lg:mt-4 lg:my-5">
        <form
          onSubmit={handleSubmit}
          className="mb-5 lg:mb-0 w-full lg:h-[88px] rounded-[10px] bg-[#ffffff] flex flex-col lg:flex-row items-center justify-center lg:justify-between shadow-lg "
        >
          <div className="mt-5 lg:mt-0 flex flex-col items-center  border-b lg:border-b-0 lg:border-r">
            <label className="font-[600] font-[outfit] text-[14px] text-[#30343b]">
              LOCATION
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g Gbagada"
              className="placeholder:text-[15px] placeholder:text-[#787878] placeholder:text-center placeholder:font-[outfit] placeholder:font-[400] outline-none p-2 text-center"
            />
          </div>
          <div className="lg:w-[30%] flex flex-col items-center my-3 lg:my-0 border-b lg:border-b-0 lg:border-r">
            <label className="font-[600] font-[outfit] text-[14px] text-[#30343b]">
              PROPERTY TYPE
            </label>
            <input
              type="text"
              placeholder="eg.Duplex, Bedroom Flat"
              className="placeholder:text-[15px] placeholder:text-[#787878] placeholder:text-center placeholder:font-[outfit] placeholder:font-[400] outline-none p-2"
            />
          </div>
          <div className="flex flex-col items-center gap-2 my-3 lg:my-0">
            <label className="font-[600] font-[outfit] text-[14px] text-[#30343b]">
              BEDROOM
            </label>
            <div className="flex items-center gap-2 justify-between">
              <p
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                onClick={decrease}
                className="w-[21px] h-[21px] rounded-[50px] border-[1px] flex items-center justify-center text-center cursor-pointer"
              >
                -
              </p>
              <input
                value={rooms}
                readOnly
                placeholder="0"
                type="text"
                className="w-[15px] outline-none placeholder:text-[#787878]"
              />
              <p
                onClick={increase}
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-[21px] h-[21px] rounded-[50px] border-[1px] flex items-center justify-center text-center cursor-pointer"
              >
                +
              </p>
            </div>
          </div>
          <div className="my-3 lg:my-0 w-[230px] h-full bg-[#3d9970] rounded-lg lg:rounded-none lg:rounded-tr-[10px] lg:rounded-br-[10px]">
            <button className="p-1 md:p-5 flex justify-center mx-auto  text-center text-[#FFFFFF] text-[20px] font-[500] font-[outfit] cursor-pointer">
              Find Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrosweProperty;
