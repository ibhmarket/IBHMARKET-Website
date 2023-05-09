import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import bitcoin1 from '../assets/bitcoin.jpg';
import cryptoimg from '../assets/bg/btc.jpg';

const contentStyle = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const CarasolCrypto = () => {
  return (
    <>
     <div>
      <div className="hidden md:block">
     <Image src={cryptoimg} className="h-screen w-screen brightness-50"/>
      </div>
      <div className="md:hidden">
     <Image src={cryptoimg} height="10000" className="h-screen w-screen brightness-[0.15]"/>
      </div>
       <section className=" relative md:-mt-[60vh] md:h-screen -mt-[50vh] h-[100vh] items-center justify-center">
         <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
           <h1 className=" md:mb-6 mb-2 text-2xl aspirefont tracking-[0.1em] leading-none   md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] ">
             CRY<span className="text-white">PTO</span>{" "}
           </h1>
           <p className="md:tracking-[1em] tracking-[0.5em]  mb-16 md:text-xl text: sm interfont text-white lg:text-xl sm:px-16 ">
             CRY
             <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#DD6399] via-[#717BF9] to-[#717BF9]">
               PTO
             </span>
           </p>
           
         </div>
       </section>
     </div>
     </>
  );
}

export default CarasolCrypto;
