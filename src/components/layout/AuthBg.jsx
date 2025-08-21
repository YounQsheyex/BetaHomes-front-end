import React from "react";
import authbg from "../../assets/authbg.png";

const AuthBg = () => {
  return (
    <div className="hidden lg:block lg:max-w-[779px] h-[900px] lg:rounded-[12px] lg:relative">
      <img
        src={authbg}
        alt="bg"
        className="w-full h-full object-cover rounded-[12px]"
      />
      <div className="absolute top-10 left-7">
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
      </div>
    </div>
  );
};

export default AuthBg;
