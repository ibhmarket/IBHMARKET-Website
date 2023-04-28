import React, { useState } from "react";
import styled from "@emotion/styled";
import TradingChart from "../components/TradingChart";
import Navbar from "../components/navbar";
import InfographicHero from "./infographicHero";
import Footer from "../components/footer";
import Head from 'next/head'
import { Select, Space , FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';


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
  const [symbol, setsymbol] = useState('ETH');

const handleChange = (value) => {
  console.log(`selected ${value}`);
  setsymbol(value);
  console.log(`selected ${symbol}`);
};
      
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
      href="https://api.whatsapp.com/send/?phone=%2B918275746327&text&type=hey%20there"
    />
      {/* Need Changes */}
      <Navbar/>
      <Wrapper>
      <InfographicHero/>
      <Select
      className="mb-4 "
      defaultValue="ETH"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'ETH',
          label: 'ETHEREUM',
        },
        {
          value: 'BTC',
          label: 'BITCOIN',
        },
        {
          value: 'LTCUSD',
          label: 'LITCOIN',
        },
        {
          value: 'NIFTY',
          label: 'NIFTY',
        },
        {
          value: 'BANKNIFTY',
          label: 'BANKNIFTY',
        },
        {
          value: 'FINNIFTY1!',
          label: 'FINNIFTY1',
        },
      ]}
    />
              <TradingSection>
          <TradingHeader>
          <Circle/><Circle/>
            {/* {symbol} */}
            </TradingHeader>
          <TradingChart symbol={symbol} />
        </TradingSection>
      </Wrapper>
        <Footer/>
    </div>
  );
};

export default Infographic;
