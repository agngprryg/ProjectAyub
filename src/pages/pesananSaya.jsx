import React from "react";
import { Clock } from "react-feather";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const PesananSaya = () => {
  const roundedLg = {
    borderTopLeftRadius: "150px",
    borderTopRightRadius: "150px",
  };
  const roundedSm = {
    borderTopLeftRadius: "35px",
    borderTopRightRadius: "35px",
  };
  return (
    <>
      <Navbar />
      <div
        style={roundedLg}
        className="mt-28 px-10 pt-[112px] pb-[224px] bg-gradient-to-r from-[#41C9E2] to-[#ace2e1]"
      >
        <div className="px-32">
          <h1 className="text-4xl text-white font-extrabold">
            Pesan Tiket? Travelin aja!
          </h1>
          <p className="text-2xl font-light text-white">
            Gausah khawatir, Pesan cepet tanpa Ribet!!
          </p>
        </div>
      </div>
      <div style={roundedLg} className="-mt-36 mb-2 px-28 pt-10 pb-44 bg-white">
        <h1 className="text-3xl font-bold text-black">Tiket Saya</h1>
        <p className="mb-10 text-lg font-normal">
          Lihat tiket kamu disini yaa, cek sudah sesuai belum
        </p>
        <div className="mb-20 flex gap-5">
          <a
            href=""
            className="px-3 py-1 rounded-xl border border-black text-black hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Semua
          </a>
          <a
            href=""
            className="px-3 py-1 rounded-xl border border-black text-black hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Lagi Diproses
          </a>
          <a
            href=""
            className="px-3 py-1 rounded-xl border border-black text-black hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Success
          </a>
        </div>
        <div className="grid grid-cols-3 gap-20">
          <div>
            <div
              style={roundedSm}
              className="w-[400px] h-[70px] pt-7 pb-14 flex justify-center items-center gap-5 bg-[#01a8bb]"
            >
              <h1 className="text-white font-light">Kode Tiket :</h1>
              <p className="text-white font-bold">S084OL</p>
              <p className="px-2 py-0.5 rounded-lg font-semibold bg-white">
                SMRG-JKT
              </p>
            </div>
            <div className="w-[400px] -mt-7 pt-4 pb-20 px-8 bg-white rounded-[20px] shadow-xl">
              <img src="/img/LogoPesawat/citilink.png" className="w-[200px]" />
              <div className="mt-8 mb-3 flex flex-col gap-1 ">
                <p>Nama : Dikiy prasetyo dwinoto </p>
                <p>Tempat Duduk : A002 </p>
                <p>Tanggal Pemesanan : 22-06-2024</p>
              </div>
              <hr className="border-2 border-dashed border-t-slate-300" />
              <div className="mt-3 flex gap-4">
                <img src="/img/pesananSaya/1.png" className="w-[30px]" />
                <p>Semarang - Jakarta</p>
              </div>
              <div className="mt-3 flex gap-5">
                <Clock />
                <p>22:00 - 02:00</p>
              </div>
            </div>
          </div>
          <div>
            <div
              style={roundedSm}
              className="w-[400px] h-[70px] pt-7 pb-14 flex justify-center items-center gap-5 bg-[#01a8bb]"
            >
              <h1 className="text-white font-light">Kode Tiket :</h1>
              <p className="text-white font-bold">S084OL</p>
              <p className="px-2 py-0.5 rounded-lg font-semibold bg-white">
                JKT-SBY
              </p>
            </div>
            <div className="w-[400px] -mt-7 pt-4 pb-20 px-8 bg-white rounded-[20px] shadow-xl">
              <img src="/img/LogoPesawat/garuda.png" className="w-[100px] " />
              <div className="mt-8 mb-3 flex flex-col gap-1 ">
                <p>Nama : Dinar Rizki Multazam </p>
                <p>Tempat Duduk : B021 </p>
                <p>Tanggal Pemesanan : 23-06-2024</p>
              </div>
              <hr className="border-2 border-dashed border-t-slate-300" />
              <div className="mt-3 flex gap-4">
                <img src="/img/pesananSaya/1.png" className="w-[30px]" />
                <p>Jakarta - Surabaya</p>
              </div>
              <div className="mt-3 flex gap-5">
                <Clock />
                <p>22:00 - 02:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PesananSaya;
