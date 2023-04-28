import React from "react";
import team_1 from "../../components/assets/team/01.png";
import team_2 from "../../components/assets/team/02.png";
import team_3 from "../../components/assets/team/03.png";
import team_4 from "../../components/assets/team/04.png";
import team_5 from "../../components/assets/team/05.png";
import team_6 from "../../components/assets/team/06.png";
import Image from "next/image";

const Services = () => {
  return (
    <div className="mt-24 md:m-0">
      <section
        id="services"
        className="bg-[#121314] items-center justify-center flex"
      >
        <div className="container flex flex-col items-center justify-center mx-auto space-y-6 sm:p-10">
          <h1 className="md:mx-72 mb-2 text-2xl font-bold md:font-extrabold font-[poppins] tracking-tight leading-none  md:text-2xl lg:text-4xl ">
            <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9]">
              {/* Best services provided by IBH */}
            </span>
          </h1>
          <p className=" mb-16 font-normal text-white aspirefont  text-2xl md:text-3xl lg:text-4xl tracking-wider sm:px-16 xl:px-48">
            OUR SERVICES
          </p>

          <div className="flex flex-col  mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="container py-8 mx-auto">
              <div className="flex flex-wrap justify-center  md:-m-4 text-center">
                <div className="m-6  sm:w-[40%] lg:w-96 w-[30%] hover:scale-110 transition duration-300 ease-in-out object-center">
                  <div className="w-[50%] p-[5px] lg:p-8 text-center m-auto md:hidden">
                    <Image
                      height={"40px"}
                      width={"50px"}
                      className="border border-gray-100 shadow-sm  "
                      src={team_1}
                    />
                  </div>
                  <div className="w-[50%] mt-2 lg:p-8 text-center m-auto hidden md:block">
                    <Image
                      height={"50px"}
                      width={"60px"}
                      className="border border-gray-100 shadow-sm  "
                      src={team_1}
                    />
                  </div>
                  <p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">
                    Research
                  </p>
                  <p className="text-white md:text-xl text-sm px-4 md:px-6">
                    Best Stocks And Shares , ETFS, Mutual Funds
                  </p>
                </div>

                <div className="m-6 sm:w-[40%] lg:w-96 w-[30%] hover:scale-110 transition duration-300 ease-in-out object-center">
                  <div className="w-[50%] p-1 lg:p-8 text-center m-auto">
                    <Image
                      height={"60px"}
                      width={"90px"}
                      className="border border-gray-100 shadow-sm"
                      src={team_2}
                    />
                  </div>
                  <p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">
                    REVIEW
                  </p>
                  <p className="text-white  md:text-xl text-sm px-4 md:px-6">
                    Review From the Individuals About The Market
                  </p>
                </div>
                <div className="m-6 sm:w-[40%] lg:w-96 w-[30%] hover:scale-110 transition duration-300 ease-in-out object-center">
                  <div className="w-[50%] p-1 lg:p-8 text-center m-auto">
                    <Image
                      height={"60px"}
                      width={"90px"}
                      className="border border-gray-100 shadow-sm"
                      src={team_3}
                    />
                  </div>
                  <p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">
                    STUDY
                  </p>
                  <p className="text-white  md:text-xl text-sm px-4 md:px-6">
                    Apply For The Fund As Per Review
                  </p>
                </div>

                <div className="m-6 sm:w-[40%] lg:w-96 w-[30%] hover:scale-110 transition duration-300 ease-in-out object-center">
                  <div className="w-[50%] p-1 lg:p-8 text-center m-auto">
                    <Image
                      height={"60px"}
                      width={"90px"}
                      className="border border-gray-100 shadow-sm "
                      src={team_4}
                    />
                  </div>
                  <p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">
                    COMPANY PROFILE
                  </p>
                  <p className="text-white  md:text-xl text-sm px-4 md:px-6">
                    Your Trust Is Our Responsibility
                  </p>
                </div>

                <div className="m-6 sm:w-[40%] lg:w-96 w-[30%] hover:scale-110 transition duration-300 ease-in-out object-center">
                  <div className="w-[50%] p-1 lg:p-8 text-center m-auto">
                    <Image
                      height={"60px"}
                      width={"90px"}
                      className="border border-gray-100 shadow-sm"
                      src={team_5}
                    />
                  </div>
                  <p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">
                    AGENT INFORMATION
                  </p>
                  <p className="text-white  md:text-xl text-sm px-4 md:px-6">
                    We Give Call According To Our Agent Information
                  </p>
                </div>

                <div className="m-6 sm:w-[40%] lg:w-96 w-[30%] hover:scale-110 transition duration-300 ease-in-out object-center">
                  <div className="w-[50%] p-1 lg:p-8 text-center m-auto">
                    <Image
                      height={"60px"}
                      width={"90px"}
                      className="border border-gray-100 shadow-sm"
                      src={team_6}
                    />
                  </div>
                  <p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">
                    EMAILING
                  </p>
                  <p className="text-white  md:text-xl text-sm px-4 md:px-6">
                    Approved Call Of The Customer Will Be Email To Agents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
