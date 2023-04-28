import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
const { Panel } = Collapse;
const text1 = `
  Solutions for institutional investors.
`;
const text2 = `
  The prime brokerage platform.
`;
const text3 = `
  Accept Crypto from everyone.
`;
const text4 = `
  Direct access toour exchange.
`;
const text5 = `
  Simplified access to crypto market data.
`;
const text6 = `
  List your asset on Coinbase.
`;
const text7 = `
  Power your crypto Compliance.
`;
const text8 = `
  Raise money for your crypto startup.
`;
const text9 = `
  Travel Rule compliance you can TRUST.
`;
const text10 = `
  Non-custodial staking on 25+ networks.
`;

const Faq = () => {
  const { token } = theme.useToken();

  return (
    <div className="-mb-36 -mt-10">
    <h2 className="aspirefont text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] font-base tracking-wide md:mx-96 md:px-36 py-16  text-2xl md:text-3xl lg:text-4xl mb-2  text-center">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="">

      <Collapse 
      accordion
          className="bg-[#f7f7f7] md:w-[50%] w-[80%] mx-auto text-lg text-white  font-bold font-[Poppins] mb-10"
        >
        <Panel header="Institutional" className=" text-white" key="1">
          <p className="text-black text-base interfont">{text1}</p>
        </Panel>
        <Panel header="Prime" key="2">
          <p className="text-black text-base interfont">{text2}</p>
        </Panel>
        <Panel header="Commerce" key="3">
          <p className="text-black text-base interfont">{text3}</p>
        </Panel>
        <Panel header="Exchange" key="4">
          <p className="text-black text-base interfont">{text4}</p>
        </Panel>
        <Panel header="Data Marketplace" key="5">
          <p className="text-black text-base interfont">{text5}</p>
        </Panel>
        <Panel header="Asset Hub" key="6">
          <p className="text-black text-base interfont">{text6}</p>
        </Panel>
        <Panel header="Compliance" key="7">
          <p className="text-black text-base interfont">{text7}</p>
        </Panel>
        <Panel header="Ventures" key="8">
          <p className="text-black text-base interfont">{text8}</p>
        </Panel>
        <Panel header="Travel Rule" key="9">
          <p className="text-black text-base interfont">{text9}</p>
        </Panel>
        <Panel header="Cloud Staking" key="10">
          <p className="text-black text-base interfont">{text10}</p>
        </Panel>
      </Collapse>
        </div>
    </div>
  );
};

export default Faq;
