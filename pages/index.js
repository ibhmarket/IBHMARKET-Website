import { FloatButton } from 'antd'
import { WhatsAppOutlined } from '@ant-design/icons';
import Navbar from '../components/navbar';
import HeroPage from '../components/homelayout/heropage';
import Introduction from '../components/homelayout/introduction';
import WhyToChoose from '../components/homelayout/whytochoose';
import Card from '../components/homelayout/card';
import Structure from '../components/homelayout/structure';
import Roadmap from '../components/homelayout/roadmap';
import Services from '../components/homelayout/services';
import Values from '../components/homelayout/values';
import Footer from '../components/footer';
// import Connection from '../components/homelayout/connection';
// import About from '../components/homelayout/about';
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
 <title>IBH | Home</title>
</Head>
     <FloatButton
     className="w-16 h-16"
      shape="circle"
      type="primary"
      style={{ right: 24 }}
      icon={<WhatsAppOutlined />}
      href="https://api.whatsapp.com/send/?phone=%2B918766919502&text&type=hey%20there"
    />
   
    <div className="bg-[#121314]">
      <Navbar />
      <HeroPage />
      <Introduction />
      <Card />
      <Structure/>
      <Roadmap />
      <WhyToChoose/> 
      <Services />
      <Values/>
      <Footer/>
      {/* <Connection /> */}
      {/* <About /> */}
    </div>
    </>
  )
}
