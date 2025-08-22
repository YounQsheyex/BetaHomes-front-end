import React, { useState } from "react";
import google from "../assets/google.png";
import AuthBg from "./layout/AuthBg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/formValidator";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import liner from "../assets/liner.png";
import linel from "../assets/linel.png";
import { PiWarningCircle } from "react-icons/pi";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const redirect = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post("/auth/sign-up", { ...data });
      if (response.status === 201) {
        console.log(response.data);
        toast.success("Registration Successful");
        redirect("/sign-in");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Occured Please Try Again");
      setErrorMsg(error?.response?.data.message || "Registration Unsuccesfull");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:max-w-[1240px] mx-auto flex justify-center items-center gap-10 lg:mt-5">
      <div className="w-full lg:max-w-[482px] p-7 ">
        <div className="w-full lg:w-[455px]">
          <Link to={"/"}>
            <div className="rounded-full bg-[#4ba586] w-[47px] mx-auto h-[47px] flex justify-center items-center  text-center">
              <h1 className="text-[24px] text-[#fefeff] font-[700] font-[Poppins]">
                BH
              </h1>
            </div>
          </Link>
          <h1 className="font-[Outfit] font-[600] text-[28px] text-[#181a20] ] text-center lg:text-start">
            Join our community of home seekers and explore the possibilities
            that await.
          </h1>
          <p className="font-[Outfit] font-[400] text-[16px] text-[#181A20D1] text-center lg:text-start">
            Lets get started by filling out the information below
          </p>
        </div>
        <form onSubmit={handleSubmit(handleRegister)} className="mt-5 ">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="w-full lg:w-[218px] h-[81px]">
              <label
                htmlFor="firstName"
                className="font-[500] font-[Outfit] text-[16px] text-[#181A20D1]"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter Name"
                className="w-full placeholder:text-[#2632388F] placeholder:font-[Outfit] placeholder:font-[400] placeholder:text-[16px] p-1.5 border-[2.5px] border-[#dedfe0] rounded-[5px] my-2"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-[#EC5E5E] font-[Outfit] font-[400] text-[14px] mb-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="w-full lg:w-[218px] h-[81px]">
              <label
                htmlFor="lastName"
                className="font-[500] font-[Outfit] text-[16px] text-[#181A20D1]"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter Name"
                className="w-full placeholder:text-[#2632388F] placeholder:font-[Outfit] placeholder:font-[400] placeholder:text-[16px] p-1.5 border-[2.5px] border-[#dedfe0] rounded-[5px] my-2"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-[#EC5E5E] font-[Outfit] font-[400] text-[14px] mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="block my-3">
            <label
              htmlFor="email"
              className="font-[500] font-[Outfit] text-[16px] text-[#181A20D1]"
            >
              Email
            </label>
            <input
              type="text"
              name=""
              id="email"
              placeholder="Enter your Email"
              className="w-full placeholder:text-[#2632388F] placeholder:font-[Outfit] placeholder:font-[400] placeholder:text-[16px] p-1.5 border-[2.5px] border-[#dedfe0] rounded-[5px] my-2"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-[#EC5E5E] font-[Outfit] font-[400] text-[14px] mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="block my-3">
            <label
              htmlFor="password"
              className="font-[500] font-[Outfit] text-[16px] text-[#181A20D1]"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              placeholder="Enter your Email"
              className="w-full placeholder:text-[#2632388F] placeholder:font-[Outfit] placeholder:font-[400] placeholder:text-[16px] p-1.5 border-[2.5px] border-[#dedfe0] rounded-[5px] my-2"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-[#EC5E5E] font-[Outfit] font-[400] text-[14px] mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPass"
              className="font-[500] font-[Outfit] text-[16px] text-[#181A20D1]"
            >
              Confirm Password
            </label>
            <input
              type="text"
              id="confirmPass"
              placeholder="Enter your Email"
              className="w-full placeholder:text-[#2632388F] placeholder:font-[Outfit] placeholder:font-[400] placeholder:text-[16px] p-1.5 border-[2.5px] border-[#dedfe0] rounded-[5px] my-2"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-[#EC5E5E] font-[Outfit] font-[400] text-[14px] mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex items-center gap-4 my-3">
            <input
              type="checkbox"
              name=""
              id="terms"
              className="bg-[#0fbb6d]"
              {...register("terms")}
            />
            {errors.terms && (
              <p className="text-[#EC5E5E] font-[Outfit] font-[400] text-[14px] mt-1">
                {errors.terms.message}
              </p>
            )}
            <label
              htmlFor="terms"
              className="font-[500] font-[Outfit] text-[16px] text-[#181A20D1]"
            >
              I agree to
              <span className="text-[#3d9970]">Terms of Service</span> and
              <span className="text-[#3d9970]"> Privacy Policies</span>
            </label>
          </div>
          <button className="w-full h-[65px] bg-[#3d9970] rounded-[15px] font-[outfit] font-[400] text-[22px] text-[#ffffff]  cursor-pointer">
            {isSubmitting ? <ClipLoader color="#ffffff" /> : "Sign up"}
          </button>
        </form>
        {errorMsg && (
          <div className="w-full my-5 justify-center rounded-xl py-2  px-4 bg-[#FF37370D] border border-[#ff3737] text-[#ff3737] flex items-center gap-3">
            <PiWarningCircle size={22} />
            <p>{errorMsg}</p>
          </div>
        )}
        <div className="flex justify-between items-center my-3 ">
          <img src={linel} alt="" />
          <p>or</p>
          <img src={liner} alt="" />
        </div>
        <button className="w-full h-[65px]  rounded-[15px] font-[outfit] font-[400] text-[22px] text-[#292929]  cursor-pointer border-[1px] border-[#000000] flex items-center gap-3 justify-center">
          <img src={google} alt="google" />
          <p>Continue with Google</p>
        </button>
        <Link to={"/sign-in"}>
          <p className="mt-3 font-[500] font-[Outfit] text-[18px] text-[#716f6f] text-center">
            Already have an account?
            <span className="text-[#39dd70]"> Sign In</span>
          </p>
        </Link>
      </div>
      <AuthBg />
    </div>
  );
};

export default Register;
