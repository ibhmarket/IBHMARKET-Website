import React from "react";
import { Modal } from "antd";
import { useState } from "react";

var Title;
var Description;
var Link;

const Footer = () => {
  const [open, setOpen] = useState(false);
  const showModal = (title, description, link) => {
    Title = title;
    Description = description;
    Link = link;
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        title={Title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <p>
          {Description}{" "}
         {Link!=="None" ?
          <a href={Link} className="text-blue-800">
            Learn More
          </a>:<div></div>
          }
        </p>
      </Modal>
      <div
        id="contact"
        className="footer-2 bg-[#1b1c1e] mt-80 p-12 md:pt-12 m-auto items-center"
      >
        <div className="container m-auto ">
          <div className="md:flex md:flex-wrap  md:-mx-4 py-6 md:pb-12 justify-center">
            <div className="md:w-2/2 md:px-4 xl:pl-16 ">
              <div className="sm:flex">
                <div className="sm:flex-1 mt-4 sm:mt-0 min-w-fit lg:px-5">
                  <h4 className="text-white font-[poppins] text-2xl mb-4">
                    <a href="#">Contact:</a>
                  </h4>

                  <h4 className="text-white font-[poppins] text-2xl mb-4">
                    <a href="#">Devanshu Ramteker</a>
                  </h4>
                  <div className=" md:block md:w-auto" id="navbar-default">
                  
                    <a href="tele:+918766919502" className="text-white">
                      +91 8766919502
                    </a>
                    <br />
                    <a
                      href="mailto:investmenthouse@gmail.com"
                      className="text-white"
                    >
                      investmenthouse@gmail.com
                    </a>
                  </div>
                </div>

                <div className="sm:flex-1 mt-4 sm:mt-0 min-w-fit lg:px-5">
                  <h6 className="font-bold tracking-wide text-xl text-white interfont mb-2">
                    COMPANY
                  </h6>
                  <div>
                    <a
                      href="/#introduction"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      About
                    </a>
                    <a
                      href="/crypto"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Crypto
                    </a>
                    <a
                      href="/realstate"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Realstate
                    </a>
                    <a
                      href="/books"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Books
                    </a>
                    <a
                      href="/infographic"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Graphs
                    </a>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0 lg:px-5">
                  <h6 className="font-bold tracking-wide text-xl text-white interfont mb-2">
                    INDIVIDUALS
                  </h6>
                  <div className="text-base">
                    <a                      
                      onClick={() => showModal('Buy & Sell',"a “buy wall” is a massive buy order, or multiple buy orders, around a particular price level. Conversely, a “sell wall” is a significant accumulation of sell orders at a given price level.",'https://crypto.com/app')}
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Buy & Sell
                    </a>
                    <a
                      
                      onClick={() => showModal('Wallet',"A blockchain wallet is a cryptocurrency wallet that allows users to manage different kinds of cryptocurrencies—for example, Bitcoin or Ethereum. A blockchain wallet helps someone exchange funds easily. Transactions are secure, as they are cryptographically signed.",'https://crypto.com/defi-wallet')}
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Wallet
                    </a>
                    <a
                      
                      onClick={() => showModal('NFT',"a unique digital identifier that cannot be copied, substituted, or subdivided, that is recorded in a blockchain, and that is used to certify ownership and authenticity.",'https://crypto.com/nft')}
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      NFT
                    </a>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0 lg:px-5">
                  <h6 className="font-bold tracking-wide text-xl text-white interfont mb-2">
                    BUSINESSES
                  </h6>
                  <div>
                    <a
                      href="/crypto#instutional"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Institutional
                    </a>
                    <a
                      href="/crypto#prime"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Prime
                    </a>
                    <a
                      href="/crypto#assethub"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Asset Hub
                    </a>
                    <a
                      href="/crypto#commerce"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Commerce
                    </a>
                    <a
                      href="/crypto#exchange"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Exchange
                    </a>
                    <a
                      href="/crypto#compliance"
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Compilance
                    </a>
                  </div>
                </div>
          
                <div className="sm:flex-1 mt-4 sm:mt-0 lg:px-5">
                  <h6 className="font-bold tracking-wide text-xl text-white interfont mb-2">
                    LEARN
                  </h6>
                  <div>
                    <a                      
                      onClick={() => showModal('Ethereum Merge',"Ethereum Mainnet uses proof-of-stake, but this wasn't always the case. The upgrade from the original proof-of-work mechanism to proof-of-stake was called The Merge.",'https://ethereum.org/en/upgrades/merge/')}
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      Ethereum Merge
                    </a>
                    <a                      
                      onClick={() => showModal('What is Bitcoin?',"Bitcoin is a protocol which implements a highly available, public, permanent, and decentralized ledger. In order to add to the ledger, a user must prove they control an entry in the ledger.",'https://en.wikipedia.org/wiki/Bitcoin')}
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      What is Bitcoin?
                    </a>
                    <a                      
                      onClick={() => showModal('What is Crypto?',"A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.",'https://crypto.com/')}
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      What is Crypto?
                    </a>
                    <a
                      onClick={() => showModal('What is Blockchain?'," Blockchain.com is a cryptocurrency financial services company. The company began as the first Bitcoin blockchain explorer in 2011 and later created a cryptocurrency wallet that accounted for 28% of bitcoin transactions between 2012 and 2020.",'https://www.blockchain.com/')}
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                     
                    >
                      What is Blockchain?
                    </a>
                    <a
                    onClick={() => showModal('How to send crypto',"You'll select the cryptocurrency first and then select Send.) You need the public key or public address of your recipient.",'https://www.coinbase.com/learn/tips-and-tutorials/how-to-send-crypto')}
                      className="text-gray-400 py-1 block interfont hover:underline cursor-pointer"
                    >
                      How to send crypto
                    </a> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="border-t border-solid border-gray-900 mt-4 py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 text-center">
                <a
                  href="/"
                  className="py-2 px-4 interfont text-white inline-block hover:underline"
                >
                  Copyright IBH 2023, All right reserved
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
