import React from "react";
import lg1 from "/img/payments/alfa.png";
import lg2 from "/img/payments/alfamidi.png";
import lg3 from "/img/payments/bca.png";
import lg4 from "/img/payments/bni.png";
import lg5 from "/img/payments/bri.png";
import lg6 from "/img/payments/briva.png";
import lg7 from "/img/payments/indomaret.png";
import lg8 from "/img/payments/mandiri.png";

const Footer = () => {
  return (
    <footer className="bottom-0">
      <div className="w-full flex py-5 px-10 bg-[#01455a] to-[#ace2e1]">
        <div className="">
          <h1 className="mt-5 text-lg text-white font-bold">
            Payment Partners
          </h1>
          <div className="w-[350px] mt-4 grid grid-cols-4 gap-5">
            <img src={lg1} alt="" className="w-20 p-3 bg-white rounded-lg" />
            <img src={lg2} alt="" className="w-20 p-3 bg-white rounded-lg" />
            <img src={lg3} alt="" className="w-20 p-3 bg-white rounded-lg" />
            <img src={lg4} alt="" className="w-20 p-3 bg-white rounded-lg" />
            <img src={lg5} alt="" className="w-20 p-3 bg-white rounded-lg" />
            <img src={lg6} alt="" className="w-20 p-3 bg-white rounded-lg" />
            <img src={lg7} alt="" className="w-20 p-3 bg-white rounded-lg" />
            <img src={lg8} alt="" className="w-20 p-3 bg-white rounded-lg" />
          </div>
        </div>
      </div>
      <div className="bg-[#01455a] py-4 border-t-[0.5px] border-opacity-5">
        <p className="text-white text-center text-xs font-extralight">
          Copyright &copy; 2024 Kelompok 2, All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
