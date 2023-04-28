import React from "react";
import team_1 from "../../components/assets/home/home.png";
import team_2 from "../../components/assets/home/support.png";
import team_3 from "../../components/assets/home/chat.png";
import team_4 from "../../components/assets/home/mail.png";
import Image from "next/image";

const Values = () => {
  return (
    <div className="-mb-48 mt-24 text-center ">
      <h1 className="md:mx-72 mb-2 text-2xl font-bold md:font-extrabold font-[poppins] tracking-tight leading-none  md:text-2xl lg:text-4xl ">
        <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9]">
          {/* Grow our clients investments */}
        </span>
      </h1>
      <p className=" mb-16 font-normal text-white aspirefont  text-2xl md:text-3xl lg:text-4xl tracking-wider sm:px-16 xl:px-48">
      OUR VALUES
      </p>
      <div className="flex  mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center md:-m-4 text-center">
            <div className="w-3/4 p-8 carousel-focus flex items-center flex-col relative lg:w-64  mx-5 my-10 pb-6 rounded-lg bg-[#2a2b2b] shadow-[#2a2b2b] h-[1000]">
              <div className=" m-6">
                <Image
                  className="rounded-3xl border border-gray-100 shadow-sm"
                  src={team_1}
                />
              </div>
              <p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">
                IBH
              </p>
              <p className="text-white md:text-lg text-sm text-center">
                A Firm That will Help You Grow Together
              </p>
            </div>
            <div className="w-3/4 p-8 carousel-focus flex items-center flex-col relative lg:w-64  mx-5 my-10 pb-6 rounded-lg bg-[#2a2b2b] shadow-[#2a2b2b] h-[1000]">
              <div className=" m-6">
                <Image
                  className="rounded-3xl border border-gray-100 shadow-sm"
                  src={team_2}
                />
              </div>
              <p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">
                SUPPORT
              </p>
              <p className="text-white md:text-lg text-sm text-center">
                We Support Our Client To Achieve Their Financial Goal
              </p>
            </div>
            <div className="w-3/4 p-8 carousel-focus flex items-center flex-col relative lg:w-64  mx-5 my-10 pb-6 rounded-lg bg-[#2a2b2b] shadow-[#2a2b2b] h-[1000]">
              <div className=" m-6">
                <Image
                  className="rounded-3xl border border-gray-100 shadow-sm"
                  src={team_3}
                />
              </div>
              <p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">
                CHAT 24/7
              </p>
              <p className="text-white md:text-lg text-sm text-center">
                Our Team Will Be In support For You 24/7
              </p>
            </div>
            <div className="w-3/4 p-8 carousel-focus flex items-center flex-col relative lg:w-64  mx-5 my-10 pb-6 rounded-lg bg-[#2a2b2b] shadow-[#2a2b2b] h-[1000]">
              <div className=" m-6">
                <Image
                  className="rounded-3xl border border-gray-100 shadow-sm"
                  src={team_4}
                />
              </div>
              <p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">
                MAILING
              </p>
              <p className="text-white md:text-lg text-sm text-center">
                You Can Mail Us At Registered E-mail Regarding Any Queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
