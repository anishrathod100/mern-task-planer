import React from "react";
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <header className="sticky top-0 w-full h-[60px] bg-[#222]  px-4 md:px-12 flex justify-between items-center">
      <h1 className="capitalize text-[20px] font-bold text-white">
        todo planer
      </h1>
      <div className="w-[35px] aspect-square rounded-full bg-[#111] flex justify-center items-center">
        <FaUser className="text-white cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
