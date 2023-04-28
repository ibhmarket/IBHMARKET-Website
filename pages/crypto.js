import React from 'react';
import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CarouselCrypto from '../components/cryptolayout/carouselcrypto';
import CryptoIntroduction from '../components/cryptolayout/cryptoIntroduction';
import Faq from '../components/cryptolayout/faq';
import Smcard from '../components/cryptolayout/smcard';
import CryptoCard from '../components/cryptolayout/cryptocards';
import Head from 'next/head'

const crypto = () => {
  return (
    <div>
       <Head>
    <title>IBH | Crypto</title>
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
      <CarouselCrypto/>
      <CryptoIntroduction/>
      <Smcard/>
      <CryptoCard/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default crypto;
