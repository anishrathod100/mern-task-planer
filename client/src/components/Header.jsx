import React from "react";
import { FaUser } from "react-icons/fa";
import { useContextData } from "../context/AppContext";
const Header = () => {
  const { authUser } = useContextData();
  return (
    <header className="sticky top-0 w-full h-[60px] bg-[#222]  px-4 md:px-12 flex justify-between items-center">
      <h1 className="capitalize text-[20px] font-bold text-white">
        todo planer
      </h1>
      <div className="w-[35px] relative aspect-square rounded-full group bg-[#111] flex justify-center items-center">
        <FaUser className="text-white cursor-pointer " />
        <div className="absolute top-[150%] right-0 w-[200px] bg-[#222] p-2 rounded-md shadow">
          <div className="text-center">
            <h3 className="text-md capitalize font-medium text-white">
              {authUser.fullname}
            </h3>
            <p className="text-sm lowercase  text-white">{authUser.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
