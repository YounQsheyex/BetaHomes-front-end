import React from "react";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import whiteloc from "../../assets/whiteloc.png";
const Footer = () => {
  return (
    <div className="mt-10 w-full mx-auto p-2 bg-[#035a33]">
      <div className="w-full lg:max-w-[1024px] mx-auto p-2 mt-25">
        <div className="lg:grid lg:grid-cols-12">
          <div className="col-span-6">
            <div className="w-[216px] h-[47px] flex items-center justify-between lg:gap-2">
              <div className="rounded-full bg-[#4ba586] w-[47px] h-[47px] flex justify-center items-center  text-center">
                <h1 className="text-[24px] text-[#fefeff] font-[700] font-[Poppins]">
                  BH
                </h1>
              </div>
              <div>
                <h1 className="text-[28px] font-[Poppins] font-[500] text-[#ffffff]">
                  BetaHouse
                </h1>
              </div>
            </div>
            <div className="w-[373px] my-5">
              <p className="font-[Outfit] font-[400] text-[16px] text-[#ffffff]">
                Discover, rent, and find your ideal home hassle-free with
                BetaHouse. Take control of your rental journey today!
              </p>
            </div>
            <div className="flex-col items-center font-[Outfit] font-[400] text-[15px] text-[#ffffff]">
              <div className="flex items-center gap-3 ">
                <img src={whiteloc} alt="location" />
                <p>95 Tinubu Estate, Lekki, Lagos</p>
              </div>
              <div className="flex items-center gap-3 my-3">
                <img src={phone} alt="phone" />
                <p>+234 675 8935 675</p>
              </div>
              <div className="flex items-center gap-3 my-4">
                <img src={email} alt="email" />
                <p>support@rentbetahouse.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="font-[600] font-[Outfit] text-[23px] text-[#ffffff]">
              Quick Links
            </h1>
            <div className="flex flex-col my-5 font-[400] font-[Outfit] text-[18px] text-[#FFFFFFE5]">
              <a href="#">Home</a>
              <a href="#" className="my-3">
                Properties
              </a>
              <a href="#" className="my-3">
                About
              </a>
              <a href="#" className="my-3">
                Contact Us
              </a>
              <a href="#" className="mb-3">
                Blog
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="font-[600] font-[Outfit] text-[23px] text-[#ffffff]">
              More
            </h1>
            <div className="flex flex-col my-5 font-[400] font-[Outfit] text-[18px] text-[#FFFFFFE5]">
              <a href="#">Agents</a>
              <a href="#" className="my-3">
                Affordable Houses
              </a>
              <a href="#">FAQ's</a>
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="font-[600] font-[Outfit] text-[23px] text-[#ffffff]">
              Popular Search
            </h1>
            <div className="flex flex-col my-5 font-[400] font-[Outfit] text-[18px] text-[#FFFFFFE5]">
              <a href="#">Apartment for sale</a>
              <a href="#" className="my-3">
                Apartment for rent
              </a>
              <a href="#" className="my-3">
                3 bedroom flat
              </a>
              <a href="#">Bungalow</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-[1px] border-[#6f6f6f] my-20 " />
      <div className="w-full mx-auto lg:max-w-[1010px] flex flex-col lg:flex-row items-center justify-between font-[400] font-[Outfit] text-[14px] text-[#ffffff] mb-15">
        <p>Copyright 2025 Betahouse | Designed by YounQsheyex</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
