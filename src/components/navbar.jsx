import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full flex justify-between items-center top-0 fixed px-5 py-4 shadow-lg">
        <div>
          <h1 className="text-lg font-extrabold">Travelin Aja!</h1>
        </div>
        <div className="flex gap-7">
          <Link className="text-sm font-medium hover:underline" to="/">
            Beranda
          </Link>
          <Link
            className="text-sm font-medium hover:underline"
            to="/pesanTiket"
          >
            Pesan Tiket
          </Link>
          <Link
            className="text-sm font-medium hover:underline"
            to="/pesananSaya"
          >
            Tiket Saya
          </Link>
        </div>
        <div className="flex gap-3">
          <a
            className="border border-black px-2 py-0.5 text-xs rounded-md"
            href=""
          >
            masuk
          </a>
          <a
            className="bg-[#01455a] px-2 py-0.5 text-xs text-white rounded-md"
            href=""
          >
            daftar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
