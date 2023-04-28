import React from "react";
import Image from "next/image";
import REITWorking from "../../components/assets/REITWorking.png";

const RealStateStructure = () => {
  return (
    <div className="h-screen">
      <section className="bg-[#121314] -mt-0  items-center justify-center flex">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
          <p className=" mb-4 font-normal text-white aspirefont  text-2xl md:text-3xl lg:text-4xl tracking-wider sm:px-16 xl:px-48">
            {" "}
            How DO REITs WORK
          </p>
          <p className="mb-8 text-lg font-normal interfont lg:text-xl sm:px-16 xl:px-48 text-gray-400">
            The flowchart below shows the basic process of a REIT transaction:
          </p>

          <div className=" flex flex-flex mb-8 lg:mb-16 sm:flex-row justify-center sm:space-y-0 sm:space-x-4">
            <div className="md:w-3/4 w-full md:py-2 md:m-0 m-4 rounded-lg bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md">
              <div className="p-5 text-center ">
                <Image width={'1900'} height={'800'} src={REITWorking} />
              </div>
              <div className="container p-8 text-justify text-[#CAC7D6]  py-8 mx-auto">
                <div className="flex flex-wrap -m-2 md:-m-4 md:px-4 text-justify  justify-around text-lg">
                  A REIT is set up in the form of a trust registered with the stock market regulator Securities and Exchange Board of India (SEBI).Stakeholders involved in a REIT are Sponsor, Trustee, Manager, Unitholders, Independent valuer additionally, auditors, registrar and transfer agents, merchant bankers and custodians may be appointed by the manager, to carry out activities incidental to the operation of REITs and additionally, meet the requirements of law.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealStateStructure;
