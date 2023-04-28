import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import btc from "../../components/assets/logos/btc.png";
import doge from "../../components/assets/logos/doge.png";
import eth from "../../components/assets/logos/eth.png";
import ltc from "../../components/assets/logos/ltc.png";
import uni from "../../components/assets/logos/uni.png";
import usdc from "../../components/assets/logos/usdc.png";
import bch from "../../components/assets/logos/bch.png";
import xrp from "../../components/assets/logos/xrp.png";
import matic from "../../components/assets/logos/matic.png";
import atom from "../../components/assets/logos/atom.png";
import xlm from "../../components/assets/logos/xlm.png";
import usdt from "../../components/assets/logos/usdt.png";
import busd from "../../components/assets/logos/busd.png";
import solana from "../../components/assets/logos/solana.png";
import dai from "../../components/assets/logos/dai.png";
import link from "../../components/assets/logos/link.png";
import fil from "../../components/assets/logos/fil.png";
import bnb from "../../components/assets/logos/bnb.png";
import ada from "../../components/assets/logos/ada.png";
import dot from "../../components/assets/logos/dot.png";
import trx from "../../components/assets/logos/trx.png";
import etc from "../../components/assets/logos/etc.png";
import near from "../../components/assets/logos/near.png";
import qnt from "../../components/assets/logos/qnt.png";
import eos from "../../components/assets/logos/eos.png";
import egld from "../../components/assets/logos/egld.png";
import grt from "../../components/assets/logos/grt.png";
import ftm from "../../components/assets/logos/ftm.png";
import flow from "../../components/assets/logos/flow.png";
import xtz from "../../components/assets/logos/xtz.png";
import zec from "../../components/assets/logos/zec.png";
import mana from "../../components/assets/logos/mana.jpeg";
import axs from "../../components/assets/logos/axs.png";
import tusd from "../../components/assets/logos/tusd.png";
import crv from "../../components/assets/logos/crv.jpeg";
import aave from "../../components/assets/logos/aave.jpeg";
import sand from "../../components/assets/logos/sand.jpeg";
import xec from "../../components/assets/logos/xec.png";
import usdp from "../../components/assets/logos/usdp.png";
import cake from "../../components/assets/logos/cake.png";
import dydx from "../../components/assets/logos/dydx.jpeg";
import inch from "../../components/assets/logos/inch.png";
import bal from "../../components/assets/logos/bal.png";
import mkr from "../../components/assets/logos/mkr.png";
import lrc from "../../components/assets/logos/lrc.png";
import comp from "../../components/assets/logos/comp.png";
import gno from "../../components/assets/logos/gno.png";
import snx from "../../components/assets/logos/snx.png";




const Smcard = () => {
  return (

    <div className="mt-60 mb-20">
    <div className="overflow-x-auto overflow-hidden scrollbar-hide">
    <Col gutter={16} className="grid">
      <Row>
        <div className="flex px-10 justify-center mx-auto text-center object-center mb-4">
        <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={btc} height={50} width={80} />
              </div>
              <div className="my-auto">
                <p className="text-center text-xl font-[poppins] font-semibold">
                  BTC
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>  
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={usdc} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  USDC
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={doge} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  DOGE
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={ltc} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  LTC
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={uni} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  UNI
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={bch} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  BCH
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={eth} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  ETH
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={xrp} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  XRP
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={matic} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  MATIC
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={atom} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  ATOM
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={inch} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  1INCH
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={bal} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  BAL
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
        </div>  
      </Row>
      <Row>
        <div className="flex px-10 justify-center mx-auto text-center object-center mb-4">
        <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={xlm} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  XLM
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={usdt} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  USDT
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={busd} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  BUSD
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={solana} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  SOLANA
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={dai} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  DAI
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={link} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  LINK
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={fil} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  FIL
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={bnb} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  BNB
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={ada} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  ADA
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={dot} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  DOT
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={mkr} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  MKR
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={lrc} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  LRC
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Row>
      <Row>
        <div className="flex px-10 justify-center mx-auto text-center object-center mb-4">
        <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={trx} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  TRX
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={etc} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  ETC
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={near} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  NEAR
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={qnt} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  QNT
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={eos} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  EOS
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={egld} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  EGLD
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={grt} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  GRT
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={ftm} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  FTM
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={flow} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  FLOW
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={xtz} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  XTZ
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={comp} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  COMP
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={gno} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  GNO
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>

        </div>
      </Row>
      <Row>
        <div className="flex px-10 justify-center mx-auto text-center object-center mb-20">
        <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={zec} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  ZEC
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={mana} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  MANA
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={axs} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  AXS
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={tusd} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  TUSD
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={crv} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  CRV
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={aave} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  AAVE
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={sand} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  SAND
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={xec} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  XEC
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={cake} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  CAKE
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={dydx} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  DYDX
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={snx} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  SNX
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-48 h-20 mr-5 justify-center shadow-sky-800 shadow-xl">
            <div className="flex justify-evenly -mt-3">
              <div>
                <Image src={usdp} height={50} width={40} className="mx-auto" />
              </div>
              <div className="my-auto">
                <p className="text-center mx-auto text-xl font-[poppins] font-semibold">
                  USDP
                </p>
                <p className="text-center text-md font-[poppins] font-medium text-blue-500">
                  
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Row>
   
    </Col>  
    </div>
              </div>
  );
};

export default Smcard;
