import React from "react";
import { GrMenu } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useAppContext } from "../../hooks/useAppContext";

const NavLoggedin = () => {
  const redirect = useNavigate();
  const { logout, user } = useAppContext();
  const handleLogout = () => {
    logout();
    redirect("/");
  };
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
        <div className="hidden lg:w-[620px] h-[50px] lg:flex lg:items-center lg:justify-between text-[#f5f5f5f5] font-[Exo 2] font-[500] text-[20px] font-[medium]">
          <Link to={"/home"}>Home</Link>
          <a href="" onClick={(e) => e.preventDefault()}>
            Properties
          </a>
          <a href="" onClick={(e) => e.preventDefault()}>
            About Us
          </a>
          <a href="" onClick={(e) => e.preventDefault()}>
            Blog
          </a>
          <a href="" onClick={(e) => e.preventDefault()}>
            Contact Us
          </a>
        </div>
        <div className="hidden lg:w-[350px] lg:flex lg:items-center justify-between  lg:gap-5 ">
          <div className="avatar avatar-online">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
            </div>
          </div>
          <div>
            <p className="font-[300] font-[Poppins] text-center text-[15px] text-[#ffffff]">
              {user.firstName}  {user.lastName}
            </p>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="cursor-pointer">
            <div className="w-10 ">
              <MdOutlineKeyboardArrowDown size={40} color="#ffffff" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#ffffff] rounded-box z-1 mt-3 w-40 p-2 shadow"
          >
            <li>
              <button onClick={handleLogout}>
                <a>Logout</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="m-1">
            <GrMenu size={40} color="#f5f5f5" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box bg-[#3d9970] z-1 w-[300px] h-[300px] p-2 shadow-sm rounded-lg "
          >
            <li>
              <div
                onClick={(e) => e.preventDefault()}
                className="w-full h-[50px] mt-5 mx-auto flex flex-col justify-center-safe text-[#f5f5f5f5] font-[Exo 2] font-[500] text-[20px] font-[medium] "
              >
                <a href="" className="mt-2">
                  Home
                </a>
                <a href="" className="my-2">
                  Properties
                </a>
                <a href="" className="my-2">
                  About Us
                </a>
                <a href="" className="my-2">
                  Blog
                </a>
                <a href="" className="my-2">
                  Contact Us
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavLoggedin;
