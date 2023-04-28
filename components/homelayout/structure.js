import React from "react";
import Image from "next/image";
import work from "../../components/assets/work.png";

const Structure = () => {
  return (
    <div className="mb-32">
      <section className="bg-[#121314]  md:mt-24  items-center justify-center flex">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
          <p className=" mb-4  font-normal text-white aspirefont text-2xl md:text-3xl lg:text-4xl tracking-wider sm:px-16 xl:px-48">
            {" "}
            STRUCTURE OF INVESTMENT BANKING{" "}
          </p>
          <p className="mb-8 text-lg font-normal interfont lg:text-xl sm:px-16 xl:px-48 text-gray-400">
            In Today's world Everyone Should Invest In Mutual It is mainly
            divided into three levels.
          </p>

          <div className=" flex flex-flex lg:mb-16 sm:flex-row justify-center sm:space-y-0 sm:space-x-4">
            <div className="md:w-3/4 w-full md:py-2 md:m-0  rounded-lg bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md">
              <div className="p-5 text-center ">
                <Image className="" src={work} />
              </div>
              <div>
                <div className="container md:mt-0 -mt-4  p-8 text-justify   py-8 mx-auto">
                  <div className="flex flex-wrap -m-2 md:-m-4 text-justify  justify-around">
                    <div className="m-4 md:m-0 p-[1px] sm:w-1/2 lg:w-[31%] md:hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-r from-[#F47C03] to-[#717BF9] rounded-lg  md:h-60">
                      <div className="w-full h-full rounded-lg bg-[#303131]  ">
                        <div className="pt-4">
                          <h2 className=" text-center text-sm md:text-xl  interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                            Front Office <br />{" "}
                          </h2>
                        </div>
                        <div className="p-4 text-left w-full ">
                          {/* <Image src={card_1} /> */}
                          <h2 className=" text-justify text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                            <span className="text-white">
                              People in this division face customers directly.Activities
                              include advisory services on merger &
                              acquisitions.
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="m-4 md:m-0 p-[1px] sm:w-1/2 lg:w-[31%] hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-r from-[#F47C03] to-[#717BF9] rounded-lg  md:h-60">
                      <div className="w-full h-full rounded-lg bg-[#303131] shadow-md ">
                        <div className="pt-4">
                          <h2 className=" text-center text-sm md:text-xl  interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                            Middle Office{" "}
                          </h2>
                        </div>
                        <div className="p-4 text-left w-full ">
                          {/* <Image src={card_2} /> */}
                          <h2 className=" text-justify text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                            <span className="text-white">
                              People in this division are responsible for
                              information technology and risk management related
                              services
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="m-4 md:m-0 p-[1px] sm:w-1/2 lg:w-[31%] hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-r from-[#F47C03] to-[#717BF9] rounded-lg  md:h-60">
                      <div className=" w-full h-full rounded-lg bg-[#303131] shadow-md ">
                        <div className="pt-4">
                          <h2 className=" text-center text-sm md:text-xl  interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                            Back Office{" "}
                          </h2>
                        </div>
                        <div className="p-5 text-left w-full ">
                          {/* <Image src={card_3} /> */}
                          <h2 className=" text-justify text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                            <span className="text-white">
                              Back office staff deals with customer services,
                              human resources, office management, staff payroll,
                              etc
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Structure;
