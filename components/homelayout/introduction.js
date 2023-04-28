import React from "react";

const Introduction = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
      
      <section id="introduction" className="mx-6 bg-[#121314] -mt-60 h-screen md:mb-0  items-center justify-center flex">
        <div className="shadow-box max-w-7xl text-center rounded-3xl overflow-hidden shadow-2xl sm:m-8  xl:-m-11 ">
          <div className="md:p-24 p-8 pt-12  md:pt-12">
            <div className="font-base tracking-wide text-[22px] md:text-[35px] mb-6 md:p-8 ">
              <span className="aspirefont text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9]">
                Introduction
              </span>
            </div>
            <p className=" md:text-[27px] text-[14px] font-[Poppins] text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] ">
              Investment Banking House{" "}
              <span className="text-white">is a financial service company or
                division of a bank that provides advisory services to
                individuals, and corporations in relation to underwriting,
                capital raising, merger, and acquisition, etc. 
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
