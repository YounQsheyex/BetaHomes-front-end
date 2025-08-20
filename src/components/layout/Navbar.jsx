import React from "react";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="-mt-135 lg:-mt-140 w-full mx-auto bg-[#1d293f1f] lg:h-[121px] p-[2px] lg:shadow-lg">
      <nav className="w-full lg:max-w-[1024px] h-[61px] mx-auto  lg:pt-10 flex justify-between lg:flex lg:justify-between lg:items-center lg:gap-16">
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
        <div className="hidden lg:w-[495px] h-[50px] lg:flex lg:items-center lg:justify-between text-[#f5f5f5f5] font-[Exo 2] font-[500] text-[20px] font-[medium]">
          <a href="">Home</a>
          <a href="">Properties</a>
          <a href="">About Us</a>
          <a href="">Blog</a>
          <a href="">Contact Us</a>
        </div>
        <div className="hidden lg:w-[314px] lg:flex lg:items-center  lg:gap-3 ">
          <button className="w-[120px] h-[61px] rounded-[8px] border-[2px] border-[#f5f5f5] p-[10px] text-[20px] text-[#f5f5f5] font-[400] font-[regular] font-[Exo 2] text-center cursor-pointer hover:bg-[#3d9970] hover:opacity-60">
            Sign Up
          </button>
          <button className="w-[120px] h-[61px] rounded-[8px] bg-[#3d9970] p-[10px] text-[20px] text-[#f5f5f5] font-[500] font-[medium] font-[Exo 2] text-center cursor-pointer  hover:opacity-60">
            Login
          </button>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="m-1">
            <GrMenu size={40} color="#f5f5f5" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box bg-[#dddddd] z-1 w-[320px] h-[400px] p-2 shadow-sm rounded-lg "
          >
            <li>
              <div className="w-full h-[50px] mt-5 mx-auto flex flex-col justify-center-safe text-[#f5f5f5f5] font-[Exo 2] font-[500] text-[20px] font-[medium]">
                <a href="">Home</a>
                <a href="">Properties</a>
                <a href="">About Us</a>
                <a href="">Blog</a>
                <a href="">Contact Us</a>
              </div>
            </li>
            <li>
              <div className="mt-50 w-[314px] items-center justify-between ">
                <button className="w-[120px] h-[61px] rounded-[8px] border-[2px] border-[#f5f5f5] p-[10px] text-[20px] text-[#f5f5f5] font-[400] font-[regular] font-[Exo 2] text-center cursor-pointer hover:bg-[#3d9970] hover:opacity-60">
                  Sign Up
                </button>
                <button className="w-[120px] h-[61px] rounded-[8px] bg-[#3d9970] p-[10px] text-[20px] text-[#f5f5f5] font-[500] font-[medium] font-[Exo 2] text-center cursor-pointer  hover:opacity-60">
                  Login
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
