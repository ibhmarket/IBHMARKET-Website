import React from 'react';
import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CarouselRealState from '../components/realstatelayout/carouselrealstate';
import REIT from '../components/realstatelayout/reit';
import RealStateCard from '../components/realstatelayout/realstatecard';
import RealStateStructure from '../components/realstatelayout/realstatestructure';
import REITBest from '../components/realstatelayout/reitbest';
import Advantage from '../components/realstatelayout/advantage';
import Head from 'next/head'

const Realstate = () => {
  return (
    <div>
    <Head>
 <title>IBH | Realstate</title>
</Head>
      <FloatButton
     className="w-16 h-16"
      shape="circle"
      type="primary"
      style={{ right: 24 }}
      icon={<WhatsAppOutlined />}
      href="https://api.whatsapp.com/send/?phone=%2B918766919502&text&type=hey%20there"
    />
      <Navbar/>
      <CarouselRealState/>
      <REIT/>
      <RealStateCard/>
      <RealStateStructure/>
      <REITBest/>
      <Advantage/>
      <Footer/>
    </div>
  );
}

export default Realstate;
