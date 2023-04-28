import React from 'react';
import Image from 'next/image'



const Card = () => {
  return (
    <div>

      

      <section className="bg-[#121314] box-content -mt-36 md:-mt-0 items-center justify-center flex">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl  text-center lg:py-16 lg:px-12">

          <h1 className="mb-4  lg:mx-64  aspirefont leading-none text-2xl md:text-3xl lg:text-4xl tracking-wide  text-white">TYPES OF INVESTMENT BANKING</h1>
          <p className="mb-8 text-lg  font-normal interfont  lg:text-xl sm:px-16 xl:px-48 text-gray-400"></p>
          <div className="flex flex-col  mb-8 lg:mb-5 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

            <div className="container  py-8 mx-auto">
              <div className="flex flex-wrap -m-2 md:-m-4 text-center">

                <div className="p-3 sm:w-1/2 lg:w-1/4 w-1/2 md:hover:scale-110 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-72">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Regional </span>Boutique  <br/> <span className='text-white'> </span></h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_1} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Smaller in size, they deal with not more than a dozen customers and specializes in a single area.</span></h2>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:w-1/2 lg:w-1/4 w-1/2 md:hover:scale-110 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-72">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] ">Elite  <span className='text-white'> Boutique </span></h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_2} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>They are similar to bulge bracket banks and provide high value deals, have multiple offices in the country, but do not have a global presence like bulge bracket banks.</span></h2>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:w-1/2 lg:w-1/4 w-1/2 md:hover:scale-110 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-72">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Middle  </span>Market </h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_3} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>They deal between $50 m to $500m, have a larger presence than regional boutique division, and do not have a global presence.</span></h2>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:w-1/2 lg:w-1/4 w-1/2 md:hover:scale-110 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-72">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "> Bulge <span className='text-white'>Projects</span></h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_4} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>They are multinational investment banking firms. These banks deal with large clients and deals; they have a global presence and recognizable name.</span></h2>
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

export default Card;
