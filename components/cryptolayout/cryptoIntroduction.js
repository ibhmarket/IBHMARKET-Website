import React from "react";

const CryptoIntroduction = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
           <section id="introduction" className="mx-4 bg-[#121314] md:-mt-24 -mt-96   items-center justify-center flex">
        <div className=" max-w-7xl text-center bg-[#292b2c] border-2 rounded-3xl overflow-hidden shadow-2xl sm:m-8  xl:-m-11 ">
          <div className="md:p-24 p-8 pt-12  md:pt-12">
            <div className="font-base tracking-wider text-[22px] md:text-[35px] mb-6 md:p-8 ">
              <span className="aspirefont text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9]">
              CRYPTOGRAPHY
              </span>
            </div>
            <p className=" md:text-[27px] text-[14px] font-[Poppins] text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] "><b className="font-bold">
            Cryptography </b>
              <span className="text-white">
               is the study of secure communications techniques that allow only the sender and intended recipient of a message to view its contents. The term is derived from the Greek word kryptos, which means hidden. It is closely associated to encryption, which is the act of scrambling ordinary text into what's known as ciphertext and then back again upon arrival. In addition, cryptography also covers the obfuscation of information in images using techniques such as microdots or merging. Ancient Egyptians were known to use these methods in complex hieroglyphics, and Roman Emperor Julius Caesar is credited with using one of the first modern ciphers.
              </span>
            </p>
          </div>
        </div>
      </section>
  </div>
  );
};

export default CryptoIntroduction;
