import React from 'react';
import Image from 'next/image'



const CryptoCard = () => {
  return (
    <div>

      <section className="bg-[#121314] box-content  items-center justify-center flex">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl  text-center lg:py-16 lg:px-12">

          <h1 className="mb-4 text-2xl lg:mx-64 aspirefont leading-none md:text-3xl lg:text-4xl tracking-wide  text-white">BUSINESSES</h1>
          <p className="mb-8 text-lg  font-normal interfont  lg:text-xl sm:px-16 xl:px-48 text-gray-400"></p>
          <div className="flex flex-col  mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

            <div className="container  py-8 mx-auto">
              <div className="flex flex-wrap -m-2 md:-m-4 text-center">

                <a href='https://www.coinbase.com/institutional' className="p-3 sm:w-1/2 lg:w-1/3 w-1/2 " id="instutional">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-48">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'></span>Instutional  <br/> <span className='text-white'> </span></h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_1} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Smaller in size, they deal with not more than a dozen customers and specializes in a single area.</span></h2>
                    </div>
                  </div>
                </a>

                <a href="https://www.coinbase.com/prime" className="p-3 sm:w-1/2 lg:w-1/3 w-1/2 " id='prime'>
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-48">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] ">  Prime</h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_2} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>The prime brokerage platform</span></h2>
                    </div>
                  </div>
                </a>
                <a href='https://www.coinbase.com/commerce' className="p-3 sm:w-1/2 lg:w-1/3 w-1/2 "id='commerce'>
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-48">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'></span>Commerce </h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_3} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Accept crypto from anyone</span></h2>
                    </div>
                  </div>
                </a>
                <a href='https://www.coinbase.com/assethub' className="p-3 sm:w-1/2 lg:w-1/3 w-1/2 "id='assethub'>
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-48">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'></span>Asset Hub </h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_3} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>list your asset on Coinbase</span></h2>
                    </div>
                  </div>
                </a>
                <a href='https://www.coinbase.com/commerce' className="p-3 sm:w-1/2 lg:w-1/3 w-1/2 "id='exchange'>
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-48">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'></span>Exchange </h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_3} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Direct access to our exchange</span></h2>
                    </div>
                  </div>
                </a>

                <a href='https://www.coinbase.com/compliance' className="p-3 sm:w-1/2 lg:w-1/3 w-1/2 "id='compliance'>
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-48">
                    <div className='p-4'>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] ">Compilance</h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_4} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#D9009C] "><span className='text-white'>Power your crypto compliance</span></h2>
                    </div>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>

  );
}

export default CryptoCard;
