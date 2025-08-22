import React from "react";
import AuthBg from "./layout/AuthBg";
import google from "../assets/google.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/formValidator";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import { axiosInstance } from "../../utils/axiosInstance";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const redirect = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const { login, user } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (data) => {
    setIsSubmitting(true);
    try {
      const { data: mydata } = await axiosInstance.post("/auth/sign-in", {
        ...data,
      });
      login(mydata.token, mydata.user);

      console.log(mydata);
      toast.success("Welcome");
      redirect("/home");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:max-w-[1240px] flex justify-center items-center gap-10 mx-auto  lg:mt-5">
      <div className="w-full lg:w-[482px] p-7 m-3">
        <div className="w-full lg:w-[455px]">
          <Link to={"/"}>
            <div className="rounded-full bg-[#4ba586] w-[47px] h-[47px] mx-auto flex justify-center items-center  text-center">
              <h1 className="text-[24px] text-[#fefeff] font-[700] font-[Poppins]">
                BH
              </h1>
            </div>
          </Link>
          <h1 className="font-[Outfit] font-[600] text-[28px] text-[#181a20] ] text-center lg:text-start">
            Welcome Back to BetaHouse!
          </h1>
          <p className="font-[Outfit] font-[400] text-[16px] text-[#181A20D1] text-center lg:text-start">
            Lets get started by filling out the information below
          </p>
        </div>
        <form onSubmit={handleSubmit(handleLogin)} className="mt-5">
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
              type="password"
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

          <div className="flex items-center justify-between my-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name=""
                id="terms"
                className="bg-[#0fbb6d]"
              />
              <label
                htmlFor="terms"
                className="font-[400] font-[Outfit] text-[16px] text-[#181A20D1]"
              >
                Remeber me
              </label>
            </div>
            <p className="font-[400] font-[Outfit] text-[16px] text-[#EC5E5E]">
              Forgot Password ?
            </p>
          </div>
          <button className="w-full h-[65px] bg-[#3d9970] rounded-[15px] font-[outfit] font-[400] text-[22px] text-[#ffffff]  cursor-pointer">
            {isSubmitting ? <ClipLoader color="#ffffff" /> : "Sign In"}
          </button>
        </form>
        <div className="">
          <p>or</p>
        </div>
        <button className="w-full h-[65px]  rounded-[15px] font-[outfit] font-[400] text-[22px] text-[#292929] cursor-pointer border-[1px] border-[#000000] flex items-center gap-3 justify-center">
          <img src={google} alt="google" />
          <p>Continue with Google</p>
        </button>
        <Link to={"/sign-up"}>
          <p className="mt-3 font-[500] font-[Outfit] text-[18px] text-[#716f6f] text-center">
            New User?
            <span className="text-[#39dd70]"> Sign up</span>
          </p>
        </Link>
      </div>
      <AuthBg />
    </div>
  );
};

export default SignIn;
