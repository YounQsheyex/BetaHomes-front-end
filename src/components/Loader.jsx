import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = ({ height }) => {
  return (
    <div
      style={{ height: height ? height : "50vh" }}
      className={`mx-auto flex items-center justify-center`}
    >
      <div className="flex items-center justify-center gap-3">
        <div className="flex gap-2 items-center">
          <div className="w-[216px] h-[47px] flex justify-center items-center gap-2">
            <div className="rounded-full bg-[#4ba586] w-[47px] h-[47px] flex justify-center items-center  text-center">
              <h1 className="text-[24px] text-[#fefeff] font-[700] font-[Poppins]">
                BH
              </h1>
            </div>
            <div>
              <h1 className="text-[28px] font-[Poppins] font-[500] text-[#787878]">
                BetaHouse
              </h1>
            </div>
          </div>
        <BounceLoader color="#3d9970" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
