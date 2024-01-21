import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-7 justify-center items-center p-5">
      <div className=" justify-center w-full flex items-center gap-4">
        {/* input */}
        <div className=" bg-white w-full md:w-[350px] max350:w-[300px] h-12 rounded-2xl shadow-inner">
          <input
            type="text"
            className=" placeholder:text-sm w-full h-11 bg-transparent bodyInfo text-text placeholder:text-text rounded-2xl outline-none p-3"
            placeholder="Search for weather"
          />
        </div>
        {/* search */}
        <div className=" bg-white w-12 h-12 rounded-full center fullShadow">
          <FaSearch className="text-const3" />
        </div>
      </div>
      {/* cloud */}
      <Image src={"/cloud.png"} alt="cloud" width={100} height={100} />
      {/* celcius */}
      <p className=" text-white font-extrabold text-5xl">24° C</p>
      {/* location */}
      <p className=" text-white font-extrabold text-xl">London</p>
      {/* last things */}
      <div className=" flex w-full md:w-1/2 justify-between items-center">
        <div className=" flex items-center gap-1">
          <Image src={"/humidity.webp"} alt="cloud" width={70} height={70} />
          <div className=" flex flex-col items-center">
            <p>100%</p>
            <p>Humidity Level</p>
          </div>
        </div>
        <div className=" flex items-center gap-1">
          <Image src={"/wind.webp"} alt="cloud" width={90} height={90} />
          <div className=" flex flex-col items-center">
            <p>100Km/hr</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
