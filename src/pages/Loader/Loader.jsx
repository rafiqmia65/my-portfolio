import React from "react";
import logo from "../../assets/MR.png";

const Loader = () => {
  return (
    <div className="h-screen w-full bg-primary flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin shadow-2xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-extrabold drop-shadow-lg animate-pulse">
              <img src={logo} className="w-10" alt="Logo" />
            </span>
          </div>
        </div>

        <p className="mt-6 text-xl text-white md:text-2xl font-semibold animate-bounce">
          Developer Data Coming...
        </p>

        <p className="mt-2 text-sm text-success animate-pulse">
          Please wait a moment
        </p>
      </div>
    </div>
  );
};

export default Loader;
