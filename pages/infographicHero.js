import Head from 'next/head'
import React from "react";
import { WhatsAppOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
// import span1 from "../components/assets/home/span1.png";
// import span2 from "../components/assets/home/span2.png";
// import span3 from "../components/assets/home/span3.png";
// import Image from "next/image";
const InfographicHero = () => {
  return (
    <div>
      <FloatButton
     className="w-16 h-16"
      shape="circle"
      type="primary"
      style={{ right: 24 }}
      icon={<WhatsAppOutlined />}
      href="https://api.whatsapp.com/send/?phone=%2B918275746327&text&type=hey%20there"
    />
      <section className="bg-[#121314] mt-12 md:mt-0 items-center justify-center flex">
        <div className=" px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
          {/* <div className="z-0 hidden xl:block animate-wiggle1 absolute right-[70px] top-[80px]">
            <Image width={'300px'} height={'300px'} src={span1} alt="" />
          </div>
          <div className="z-0 hidden xl:block animate-wiggle2 absolute left-[-150px] top-[35s0px]">
            <Image width={'300px'} height={'300px'} src={span1} alt="" />
          </div>
          <div className="z-0 hidden xl:block animate-wiggle3 absolute left-[400px] top-[-100px]">
            <Image width={'300px'} height={'300px'} src={span2} alt="" />
          </div>
          <div className="z-0 hidden xl:block animate-wiggle1 absolute bottom-[-200px] left-[400px]">
            <Image width={'300px'} height={'300px'} src={span3} alt="" />
          </div>
          <div className="z-0 hidden xl:block animate-wiggle2 absolute bottom-[30px] right-[250px]">
            <Image width={'300px'} height={'300px'} src={span2} alt="" />
          </div> */}

          {/* <div className="z-0 block md:hidden animate-wiggle1 absolute right-[20px] top-[100px]">
            <Image width={'150px'} height={'150px'} src={span1} alt="" />
          </div>
          <div className="z-0 block md:hidden animate-wiggle3 absolute left-[0px] top-[300px]">
            <Image width={'150px'} height={'150px'} src={span2} alt="" />
          </div>
          <div className="z-0 block md:hidden animate-wiggle1 absolute bottom-[200px] left-[300px]">
            <Image width={'150px'} height={'150px'} src={span3} alt="" />
          </div>
          <div className="z-0 block md:hidden animate-wiggle2 absolute bottom-[10px] right-[300px]">
            <Image width={'150px'} height={'150px'} src={span2} alt="" />
          </div> */}

         
          <h1 className=" md:mb-6 mb-2 text-2xl aspirefont tracking-[0.1em] leading-none   md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] ">
             <span className="text-white"></span>{" "}
            
          </h1>
         
          {/* <div className=" flex flex-row mb-8 lg:mb-16 space-y-4 sm:flex-row justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] ">
           
            <a href="#" className="hover:text-white shadow-box-sm shadow-sm inline-flex justify-centeritems-center  text-base font-medium text-center text-gray-900 rounded-lg hover:scale-110 transition duration-300 ease-in-out text-transparent bg-clip-text hover:bg-clip-border bg-gradient-to-r  from-[#F47C03] via-[#D9009C] to-[#717BF9]">
            <span className=' py-5 px-7  text-2xl hover:text-black text-transparent bg-clip-text bg-gradient-to-r  from-[#FA7592] via-[#9504D2] to-[#681CBE]'>Let's Explore</span>
            </a>  
        </div> */}
        </div>
      </section>
    </div>
  );
};
export default InfographicHero;