import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
const { Panel } = Collapse;
const text1 = `
  Solutions for institutional investors.
`;
const text2 = `
  The prime brokerage platform.
`;

const Advantage = () => {
    const { token } = theme.useToken();

    return (
      <div className="-mb-36 mt-24">
        <h2 className="aspirefont text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] font-base tracking-wide md:mx-96 md:px-36 py-16  text-2xl md:text-3xl lg:text-4xl mb-2  text-center">
         REITs ADVANTAGES & DISADVANTAGES OF INVESTING IN REITs
        </h2>
        <Collapse 
          className="bg-[#e7e7e7] md:w-[50%] w-[80%] mx-auto text-lg text-white  font-bold font-[Poppins] mb-10"
        >
          <Panel header="Advantages" key="1" className="">
            <div className="">
            <p className=" font-normal text-justify font-[Poppins] p-4">Advantages from REIT investments:
            <ul className="list-disc">
                <li>Investment in real estate properties can be very capital intensive. However, shares of REITs are comparatively affordable, as investors can purchase few units at a time without worrying about large capital outflows. </li>
                <li>
                REITs are suitable for small Investors too, as these eliminate direct dealing with property builders. Also, REITs come with lower liquidity risk as compared to direct property investment.</li>
                <li>REITs are listed in stock exchanges. Hence all pertinent details can be checked online by investors before making an investment.</li>
                <li>REITs offer income to investors primarily through dividend. The dividend payment in most REITs is relatively assured. This is because the primary source of earning is through rental (lease) income. </li>
                <li>REITs are regulated by SEBI, and therefore the chances of fraud are low.</li></ul></p>
            </div>
            
          </Panel>
          <Panel header="Disadvantages" key="2">
            <p className="font-normal text-justify font-[Poppins] p-4">Drawbacks of Investing in REITs:
            <ul className="list-disc">
                <li>
                Limited growth potential due to large distributions to investors</li>
                <li>
                Higher taxes on dividends compared to other investments</li>
                <li>
                Potentially high fees and increased risk</li>
                <li>
                Vulnerability to real estate market trends and fluctuations</li>
                <li>Lack of control over performance and management decisions</li>
                <li>
                Potential restrictions on selling shares for a set period of time.</li></ul></p>
          </Panel>
        </Collapse>
      </div>
    );
}

export default Advantage;
