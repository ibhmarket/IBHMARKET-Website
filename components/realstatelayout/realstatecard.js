import React from 'react';
import Image from 'next/image'



const RealStateCard = () => {
  return (
    <div>

      <section className="bg-[#121314] box-content mt-24 md:mt-48 items-center justify-center flex">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl  text-center lg:py-16 lg:px-12">
        <h1 className=" md:mb-6 mb-2 text-2xl aspirefont leading-none md:text-3xl lg:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] "> <span className='text-white'>TYPES OF</span> REITs</h1>
          <p className="mb-8 text-lg  font-normal interfont  lg:text-xl sm:px-16 xl:px-48 text-gray-400"></p>
          <div className="flex flex-col  mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

            <div className="container  py-8 mx-auto">
              <div className="flex flex-wrap -m-2 md:-m-4 text-center">
                <div className="p-3 sm:w-1/2 lg:w-1/2 w-1/2 md:hover:scale-100 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-md  h-full lg:h-[250px]">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Equity REITs </span>Boutique  <br/> <span className='text-white'> </span></h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_1} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>These REITs primarily invest in offices, residential complexes, industrial estates, hotels etc. They buy, manage, set-up and sell real estate. The income earned is distributed to investors as dividends. Income is mostly generated through rentals and sale of properties. </span></h2>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:w-1/2 lg:w-1/2 w-1/2 md:hover:scale-100 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-md  h-full lg:h-[250px]">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] ">Mortgage REITs  <span className='text-white'> Boutique </span></h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_2} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>These REITs loan out money to buyers of real estate, and some may even buy-out existing mortgages. They are also referred to as mREITs. These derive income from the interest received through mortgage loans. They work somewhat like a debt mutual fund, however, the risk component is often higher in REITs.</span></h2>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:w-1/2 lg:w-1/2 w-1/2 md:hover:scale-100 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-md  h-full lg:h-[250px]">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Retail REITs  </span>Market </h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_3} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Retail REITs invest in the retail segment like shopping malls, grocery stores, hypermarkets, supermarkets, etc. However, retail REITs do not run these retail outlets. They only focus on renting out the space to various retail tenants. Returns in this case depend on the performance of the retail sector. </span></h2>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:w-1/2 lg:w-1/2 w-1/2 md:hover:scale-100 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-md h-full lg:h-[250px]">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "> Residential REITs <span className='text-white'>Projects</span></h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_4} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Residential REITs buy and operate apartment buildings, gated communities, and other such housing establishments. Whenever the residential property demand in India grows, these REITs reflect a positive growth.</span></h2>
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
}

export default RealStateCard;
