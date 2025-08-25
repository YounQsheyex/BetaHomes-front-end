import React, { useEffect } from "react";
import { useState } from "react";
// import { properties } from "../../utils/data.js";
import bath from "../assets/bath.png";
import bed from "../assets/bed.png";
import blackloc from "../assets/blackloc.png";
import img from "../assets/img.png";
import vid from "../assets/vid.png";
import pin from "../assets/pin.png";
import naira from "../assets/naira.png";
import love from "../assets/love.png";
import arrow from "../assets/arrow.png";
import share from "../assets/share.png";
import filter from "../assets/filter.png";
import Pagination from "./Pagination.jsx";
import { axiosInstance } from "../../utils/axiosInstance.js";
import Loader from "./Loader.jsx";

const AllProperty = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setIsloading] = useState(false);
  const [properties, setProperties] = useState([]);
  const itemsPerPage = 9;

  // get all properties from db
  const fetchProperties = async () => {
    setIsloading(true);
    try {
      const response = await axiosInstance.get("/property/all-property");
      const { data } = response;
      const property = data.properties || data || [];
      console.log(property);
      setProperties(property);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // calculate what to show
  
  const totalItems = properties.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const lastItem = Math.min(indexOfLastItem, totalItems);
  const firstItem = totalItems === 0 ? 0 : indexOfFirstItem + 1;
  const currentItems = properties.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="w-full lg:max-w-[1240px] mx-auto p-2">
      <div className="my-10 w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex gap-2">
          <div className="flex gap-1.5">
            <img src={filter} alt="filter" />
            <p>More Filter</p>
          </div>
          <div>
            <p>
              Showing {firstItem}–{lastItem} of {totalItems} results
            </p>
          </div>
        </div>
        <div className="flex gap-1.5">
          <p>Sort by:</p>
          <p>Default</p>
        </div>
      </div>
      <div className="md:mx-auto flex items-center md:justify-center lg:justify-between flex-wrap">
        {loading ? (
          <Loader />
        ) : currentItems && currentItems.length > 0 ? (
          currentItems.map((property, index) => {
            return (
              <div key={index} className="w-full md:w-[395px] p-[10px] my-5">
                <div className="relative">
                  <img
                    src={property.image}
                    alt="houseImg"
                    className="w-full h-[297px] object-cover rounded-t-[10px]"
                  />

                  <div className="w-[96.49px] h-[36.19px] rounded-[2.89px] bg-[#3d9970] absolute top-3 left-3 flex items-center justify-center">
                    <p className="text-center font-[500] font-[Outfit] text-[13px] text-[#ffffff]">
                      {property.feature}
                    </p>
                  </div>
                  <div className="w-[96.49px] h-[36.19px] rounded-[2.89px] bg-[#D3D3D3B2] absolute top-3 right-4 flex items-center justify-center">
                    <p className="text-center font-[500] font-[Outfit] text-[13px] text-[#ffffff]">
                      {property.tag}
                    </p>
                  </div>
                  <div className="w-[182px] h-[60px] flex justify-between absolute bottom-2 right-10">
                    <div className="flex justify-center items-center w-[41.35px] h-[41.35px] rounded-[9.19px] bg-[#878787bf] ">
                      <img src={pin} alt="pin" className="object-cover" />
                    </div>
                    <div className="flex justify-center items-center w-[41.35px] h-[41.35px] rounded-[9.19px] bg-[#878787bf] ">
                      <img src={vid} alt="vid" className="object-cover" />
                    </div>

                    <div className="flex justify-center items-center w-[41.35px] h-[41.35px] rounded-[9.19px] bg-[#878787bf] ">
                      <img src={img} alt="img" className="object-cover" />
                    </div>
                  </div>
                </div>

                <div className="p-[10px] border-[0.1px] border-[#ddd8d8] rounded-b-[10px] ">
                  <div>
                    <h1 className="font-[600] font-[Outfit] text-[20.68px] text-[#444444]">
                      {property.title}
                    </h1>
                  </div>
                  <div className="flex items-center gap-3 my-5">
                    <img src={blackloc} alt="location" />
                    <p className="font-[Outfit] font-[400] text-[15px] text-[#666666]">
                      {property.location}
                    </p>
                  </div>
                  <div className="flex gap-5 items-center my-5">
                    <div className="flex gap-2 items-center">
                      <img src={bed} alt="room" />
                      <p className="font-[Outfit] font-[400] text-[16px] text-[#666666]">
                        {property.bedrooms}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img src={bath} alt="bath" />
                      <p className="font-[Outfit] font-[400] text-[16px] text-[#666666]">
                        {property.bathroom}
                      </p>
                    </div>
                  </div>
                  <hr className="w-full md:w-[350px] border-[1px] border-[#e8e8e8] my-5" />
                  <div className="flex flex-col md:flex-row justify-between items-center mb-3">
                    <div className="flex items-center gap-1">
                      <img
                        src={naira}
                        alt="naira"
                        className="object-cover w-[16px] h-[18.67px]"
                      />
                      <p className="font-[Outfit] font-[600] text-[22px] text-[#373737]">
                        {property.price}
                      </p>
                    </div>
                    <div className="w-[130px] flex gap-6 items-center mt-4 md:mt-0">
                      <img src={arrow} alt="arrow" />
                      <img src={share} alt="share" />
                      <img src={love} alt="love" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Property Found</p>
        )}
      </div>
      {/* Pagination */}
      <Pagination
        totalItems={properties.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AllProperty;
