import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Books from "../components/books";
import Head from 'next/head'
import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

const books = () => {
  return (
    
    <div className="" style={{ background: "rgb(18 19 20 / 1)" }}>
      <FloatButton
     className="w-16 h-16"
      shape="circle"
      type="primary"
      style={{ right: 24 }}
      icon={<WhatsAppOutlined />}
      href="https://api.whatsapp.com/send/?phone=%2B918766919502&text&type=hey%20there"
    />
            <Head>
        <title>IBH | Books</title>
      </Head>

      <Navbar/>
      <Books/>
          <Footer/>
    </div>
  );
}

export default books;
