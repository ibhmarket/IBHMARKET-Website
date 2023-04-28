import React from "react";

const REIT = () => {
  return (
    <div className="">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
      
      <section id="introduction" className="mx-4 bg-[#121314] md:-mt-24 -mt-96   items-center justify-center flex">
        <div className=" max-w-7xl text-center bg-[#292b2c] border-2 rounded-3xl overflow-hidden shadow-2xl sm:m-8  xl:-m-11 ">
          <div className="md:p-24 p-8 pt-12  md:pt-12">
            <div className="font-base tracking-wider text-[22px] md:text-[35px] mb-6 md:p-8 ">
              <span className="aspirefont text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9]">
              REIT in INDIA
              </span>
            </div>
            <p className=" md:text-[27px] text-[14px] font-[Poppins] text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] "><b className="font-bold">
            Real Estate Investment Trust (REIT) in India{" "}</b>
              <span className="text-white">
              A Real Estate Investment Trust (REIT) is an investment instrument that offers proportionate ownership of an income-generating real estate asset to retail investors. Historically in India, investors have been investing in real estate by purchasing a property or land via real estate developers and property brokers. In such investments, investors had to rely on long-term market value appreciation of the property to generate a return on investment. This, however, was only possible when real estate markets would be on an upswing. 
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default REIT;
