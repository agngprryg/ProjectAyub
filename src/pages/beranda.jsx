import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Beranda = () => {
  const imageUrl = "/img/beranda/1.jpg";

  // Style untuk background image
  const divStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover", // Menyesuaikan gambar dengan ukuran div
  };
  return (
    <>
      <Navbar />
      <main className="p-20" style={divStyle}>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-[#01455a] text-3xl font-extrabold my-10">
            Mau Traveling Tapi Budget <br /> Pas Pas an?
          </h1>
          <a
            className="px-20 py-2 bg-[#ffbd4c] text-white rounded-3xl font-bold hover:scale-110 transition-all duration-300 ease-in-out"
            href=""
          >
            Selengkapnya
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Beranda;
