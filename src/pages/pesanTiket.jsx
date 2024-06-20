import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const PesanTiket = () => {
  const rounded = {
    borderTopLeftRadius: "150px",
    borderTopRightRadius: "150px",
  };

  const imageUrl = "/img/pesanTiket/1.jpg";

  // Style untuk background image
  const divStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover", // Menyesuaikan gambar dengan ukuran div,
    borderTopLeftRadius: "150px",
    borderTopRightRadius: "150px",
  };
  return (
    <>
      <Navbar />
      <div style={divStyle} className="mt-[62px]"></div>
      <div className="bg-white px-10 py-6 -mt-[190px]" style={rounded}>
        <div className="px-20">
          <div className="w-[400px] p-3 mb-5 text-white bg-[#78d6da] rounded-xl">
            <h1 className="font-bold">Jakarta - Bali</h1>
            <p className="font-light">Senin,20 juni 2024 | Ekonomi | A01</p>
          </div>
          <div className="flex gap-5">
            <div className="w-[190px] px-5 py-1 text-white bg-[#78d6da] rounded-xl">
              <h1>Selasa, 20 jun 2024</h1>
              <p>ekonomi</p>
            </div>
            <div className="w-[190px] px-5 py-1 text-white bg-[#78d5da] rounded-xl">
              <h1>Rabu, 20 jun 2024</h1>
              <p>ekonomi</p>
            </div>
            <div className="w-[190px] px-5 py-1 text-white bg-[#78dac8] rounded-xl">
              <h1>Kamis, 20 jun 2024</h1>
              <p>ekonomi</p>
            </div>
            <div className="w-[190px] px-5 py-1 text-white bg-[#78dab8] rounded-xl">
              <h1>Jumat, 20 jun 2024</h1>
              <p>ekonomi</p>
            </div>
            <div className="w-[190px] px-5 py-1 text-white bg-[#78d6da] rounded-xl">
              <h1>Sabtu, 20 jun 2024</h1>
              <p>ekonomi</p>
            </div>
            <div className="w-[190px] px-5 py-1 text-white bg-[#78d6da] rounded-xl">
              <h1>Minguu, 20 jun 2024</h1>
              <p>ekonomi</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[600px] mt-5 px-5 py-2 flex justify-between shadow-lg rounded-sm ">
              <div className="flex flex-col gap-2">
                <img
                  src="/img/LogoPesawat/citilink.png"
                  alt="Citilink"
                  className="w-[100px] h-[30px]"
                />
                <h1 className="font-bold text-xl">Citilink air ways</h1>
                <p className="text-lg">21:00 - 02:00</p>
                <p>Economy</p>
              </div>
              <div className="flex flex-col">
                <p className="line-through font-thin mb-1">Rp. 900.000,00</p>
                <p className="font-medium mb-12">Rp. 700.000,00</p>
                <button className="px-3 py-1 bg-[#01a8bb] text-white rounded-lg">
                  Choose
                </button>
              </div>
            </div>
            <div className="w-[600px] mt-5 px-5 py-2 flex justify-between shadow-lg rounded-sm ">
              <div className="flex flex-col gap-2">
                <img
                  src="/img/LogoPesawat/garuda.png"
                  alt="Citilink"
                  className="w-[100px] h-[30px]"
                />
                <h1 className="font-bold text-xl">Garuda air ways</h1>
                <p className="text-lg">21:00 - 02:00</p>
                <p>Economy</p>
              </div>
              <div className="flex flex-col">
                <p className="line-through font-thin mb-1">Rp. 1.900.000,00</p>
                <p className="font-medium mb-12">Rp. 950.000,00</p>
                <button className="px-3 py-1 bg-[#01a8bb] text-white rounded-lg">
                  Choose
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PesanTiket;
