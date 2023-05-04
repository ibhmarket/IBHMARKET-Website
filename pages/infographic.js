import React, { useState } from "react";
import styled from "@emotion/styled";
import TradingChart from "../components/TradingChartETH";
import Navbar from "../components/navbar";
import InfographicHero from "./infographicHero";
import Footer from "../components/footer";
import Head from 'next/head'
import { Select, Space , FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import TradingChartETH from "../components/TradingChartETH";
import TradingChartBTC from "../components/TradingChartBTC";
import TradingChartLTC from "../components/TradingChartLTC";
import TradingChartBankNifty from "../components/TradingChartBANKNIFTY";
import TradingChartNIFTY from "../components/TradingChartNIFTY";


const Wrapper = styled.div`
width: 60%;
margin: auto;

@media (max-width: 768px) {
  width: 90%;
}
`;

const TradingSection = styled.div`
  background: #222324;
  padding: 2px 2px 2px 2px;
  border-radius: 10px;
  box-shadow: 0px 0px 28px 3px rgba(0,0,0,0.75);
`;

const TradingHeader = styled.div`
display:flex;
  background: #1e1f20;
  padding: 10px 10px 10px 20px;
  color: white;
  font-family: Inter;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffffff;
  margin-right: 20px;
  margin-block: auto;
`;


const Infographic = () => {
      
  return (
    <div className="" style={{ background: "rgb(18 19 20 / 1)" }}>
      
      <Head>
    <title>IBH | Graphs</title>
  </Head>
  <FloatButton
     className="w-16 h-16"
      shape="circle"
      type="primary"
      style={{ right: 24 }}
      icon={<WhatsAppOutlined />}
      href="https://api.whatsapp.com/send/?phone=%2B918766919502&text&type=hey%20there"
    />
      {/* Need Changes */}
      <Navbar/>
      <Wrapper>
      <InfographicHero/>
      <h1 className=" md:mb-6 mb-2 text-lg aspirefont tracking-[0.1em] leading-none   md:text-5xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] ">
             <span className="text-white"></span>{" "}
            Ethereum
          </h1>
              <TradingSection>
          <TradingHeader>
          <Circle/><Circle/>
            {/* {symbol} */}
            </TradingHeader>
          <TradingChartETH  />
        </TradingSection>
        <InfographicHero/>
      <h1 className=" md:mb-6 mb-2 text-lg aspirefont tracking-[0.1em] leading-none   md:text-5xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] ">
             <span className="text-white"></span>{" "}
            Bitcoin
          </h1>
              <TradingSection>
          <TradingHeader>
          <Circle/><Circle/>
            {/* {symbol} */}
            </TradingHeader>
          <TradingChartBTC />
        </TradingSection>
        <InfographicHero/>
      <h1 className=" md:mb-6 mb-2 text-lg aspirefont tracking-[0.1em] leading-none   md:text-5xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] ">
             <span className="text-white"></span>{" "}
            Litcoin
          </h1>
              <TradingSection>
          <TradingHeader>
          <Circle/><Circle/>
            {/* {symbol} */}
            </TradingHeader>
          <TradingChartLTC  />
        </TradingSection>
        <InfographicHero/>
      <h1 className=" md:mb-6 mb-2 text-lg aspirefont tracking-[0.1em] leading-none   md:text-5xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] ">
             <span className="text-white"></span>{" "}
            BankNifty
          </h1>
              <TradingSection>
          <TradingHeader>
          <Circle/><Circle/>
            {/* {symbol} */}
            </TradingHeader>
          <TradingChartBankNifty/>
        </TradingSection>
        <InfographicHero/>
      <h1 className=" md:mb-6 mb-2 text-lg aspirefont tracking-[0.1em] leading-none   md:text-5xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] ">
             <span className="text-white"></span>{" "}
            Nifty
          </h1>
              <TradingSection>
          <TradingHeader>
          <Circle/><Circle/>
            {/* {symbol} */}
            </TradingHeader>
          <TradingChartNIFTY />
        </TradingSection>
      </Wrapper>
        <Footer/>
    </div>
  );
};

export default Infographic;
