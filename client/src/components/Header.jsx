import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useContextData } from "../context/AppContext";
const Header = () => {
  const { authUser, logout } = useContextData();
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <header className="sticky relative top-0 w-full h-[60px] bg-[#222]  px-4 md:px-12 flex justify-between items-center">
      <h1 className="capitalize text-[20px] font-bold text-white">
        todo planer
      </h1>
      <div
        className="w-[35px] aspect-square rounded-full cursor-pointer  bg-[#111] flex justify-center items-center"
        onClick={() => setModelOpen(!modelOpen)}
      >
        {authUser ? (
          <span className="text-white cursor-pointer uppercase text-[15px]">
            {authUser?.fullname[0]}
          </span>
        ) : (
          <FaUser className="text-white " />
        )}
      </div>
      {modelOpen && (
        <div className="absolute top-[110%] right-3 w-[200px] bg-[#222] p-2 rounded-md shadow">
          <div className="text-center space-y-1">
            <h3 className="text-md capitalize font-medium text-white">
              {authUser.fullname}
            </h3>
            <p className="text-[12px] lowercase  text-white">
              {authUser.email}
            </p>
            <button
              onClick={logout}
              className="w-full bg-green-500 py-1 rounded-full text-white text-sm my-2 cursor-pointer hover:bg-green-600 duration-300 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
