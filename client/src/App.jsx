import React, { useState } from "react";
import {
  FaCheckCircle,
  FaCircle,
  FaPlus,
  FaTrash,
  FaUser,
} from "react-icons/fa";
const App = () => {
  const [color, setColor] = useState("gray");
  return (
    <>
      <div className=" w-full h-[100vh] overflow-y-hidden bg-[#111]">
        <header className="sticky top-0 w-full h-[60px] bg-[#222]  px-4 md:px-12 flex justify-between items-center">
          <h1 className="capitalize text-[20px] font-bold text-white">
            todo planer
          </h1>
          <div className="w-[35px] aspect-square rounded-full bg-[#111] flex justify-center items-center">
            <FaUser className="text-white cursor-pointer" />
          </div>
        </header>
        <main className="px-4 md:px-12 ">
          <div className="w-full md:h-[70px] grid md:grid-cols-12 gap-4 items-center justify-center py-2 bg-[#111]">
            <div className="w-full  md:col-span-8 bg-[#222] p-2 rounded-full">
              <form className="flex gap-4 items-center">
                <input
                  type="text"
                  className="w-full outline-none px-2 text-white text-sm "
                  placeholder="Write title here..."
                />
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        value="gray"
                        className="hidden"
                        checked={color === "gray"}
                        onChange={(e) => setColor(e.target.value)}
                      />
                      <span
                        className={`w-[18px] aspect-square rounded-full bg-gray-500 block ${color === "gray" ? "border-2 border-white" : "border-2 border-transparent"}`}
                      ></span>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        value="green"
                        className="hidden"
                        checked={color === "green"}
                        onChange={(e) => setColor(e.target.value)}
                      />
                      <span
                        className={`w-[18px] aspect-square rounded-full bg-green-500 block ${color === "green" ? "border-2 border-white" : "border-2 border-transparent"}`}
                      ></span>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        value="red"
                        className="hidden"
                        checked={color === "red"}
                        onChange={(e) => setColor(e.target.value)}
                      />
                      <span
                        className={`w-[18px] aspect-square rounded-full bg-red-500 block ${color === "red" ? "border-2 border-white" : "border-2 border-transparent"}`}
                      ></span>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        value="green"
                        className="hidden"
                        checked={color === "blue"}
                        onChange={(e) => setColor(e.target.value)}
                      />
                      <span
                        className={`w-[18px] aspect-square rounded-full bg-blue-500 block ${color === "blue" ? "border-2 border-white" : "border-2 border-transparent"}`}
                      ></span>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        value="yellow"
                        className="hidden"
                        checked={color === "yellow"}
                        onChange={(e) => setColor(e.target.value)}
                      />
                      <span
                        className={`w-[18px] aspect-square rounded-full bg-yellow-500 block ${color === "yellow" ? "border-2 border-white" : "border-2 border-transparent"}`}
                      ></span>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        value="pink"
                        className="hidden"
                        checked={color === "pink"}
                        onChange={(e) => setColor(e.target.value)}
                      />
                      <span
                        className={`w-[18px] aspect-square rounded-full bg-pink-500 block ${color === "pink" ? "border-2 border-white" : "border-2 border-transparent"}`}
                      ></span>
                    </label>
                  </div>
                  <button className="w-[35px] aspect-square rounded-full bg-white text-black flex justify-center items-center cursor-pointer">
                    <FaPlus />
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full flex justify-center md:justify-end md:col-span-4">
              <div className="flex gap-2 ">
                <button className="bg-green-200 border border-green-400 text-green-600 flex items-center gap-2 px-2 py-1 rounded-full cursor-pointer text-sm">
                  <h4>Complated</h4>
                  <span>0</span>
                </button>
                <button className="bg-red-200 border border-red-400 text-red-600 flex items-center gap-2 px-2 py-1 rounded-full cursor-pointer text-sm">
                  <h4>Pending</h4>
                  <span>0</span>
                </button>
                <button className="bg-blue-200 border border-blue-400 text-blue-600 flex items-center gap-2 px-2 py-1 rounded-full cursor-pointer text-sm">
                  <h4>Total</h4>
                  <span>0</span>
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-y-scroll h-[calc(100vh-130px)] py-2">
            <div className="grid md:grid-cols-2 gap-4 ">
              <div className="bg-[#000] rounded-md py-2 px-3">
                <div className="border-l-5 border-blue-400 rounded-md pl-3 flex justify-between items-center">
                  <div className="">
                    <p className="text-[16px] text-gray-400">complete task</p>
                    <span className="text-sm text-zinc-400">
                      Created on
                    </span>{" "}
                    <span className="text-sm font-bold text-blue-400">
                      Sunday
                    </span>{" "}
                    <span className="text-sm  text-blue-400">
                      December 22 2025 - 02:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-red-500 cursor-pointer text-[14px] ">
                      <FaTrash />
                    </button>
                    <button className="text-white cursor-pointer text-[14px] ">
                      {/* <FaCheckCircle /> */}
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#000] rounded-md py-2 px-3">
                <div className="border-l-5 border-green-400 rounded-md pl-3 flex justify-between items-center">
                  <div className="">
                    <p className="text-[16px] text-gray-400">complete task</p>
                    <span className="text-sm text-zinc-400">
                      Created on
                    </span>{" "}
                    <span className="text-sm font-bold text-green-400">
                      Sunday
                    </span>{" "}
                    <span className="text-sm  text-green-400">
                      December 22 2025 - 02:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-red-500 cursor-pointer text-[14px] ">
                      <FaTrash />
                    </button>
                    <button className="text-white cursor-pointer text-[14px] ">
                      {/* <FaCheckCircle /> */}
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#000] rounded-md py-2 px-3">
                <div className="border-l-5 border-blue-400 rounded-md pl-3 flex justify-between items-center">
                  <div className="">
                    <p className="text-[16px] text-gray-400">complete task</p>
                    <span className="text-sm text-zinc-400">
                      Created on
                    </span>{" "}
                    <span className="text-sm font-bold text-blue-400">
                      Sunday
                    </span>{" "}
                    <span className="text-sm  text-blue-400">
                      December 22 2025 - 02:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-red-500 cursor-pointer text-[14px] ">
                      <FaTrash />
                    </button>
                    <button className="text-white cursor-pointer text-[14px] ">
                      {/* <FaCheckCircle /> */}
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#000] rounded-md py-2 px-3">
                <div className="border-l-5 border-green-400 rounded-md pl-3 flex justify-between items-center">
                  <div className="">
                    <p className="text-[16px] text-gray-400">complete task</p>
                    <span className="text-sm text-zinc-400">
                      Created on
                    </span>{" "}
                    <span className="text-sm font-bold text-green-400">
                      Sunday
                    </span>{" "}
                    <span className="text-sm  text-green-400">
                      December 22 2025 - 02:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-red-500 cursor-pointer text-[14px] ">
                      <FaTrash />
                    </button>
                    <button className="text-white cursor-pointer text-[14px] ">
                      {/* <FaCheckCircle /> */}
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#000] rounded-md py-2 px-3">
                <div className="border-l-5 border-blue-400 rounded-md pl-3 flex justify-between items-center">
                  <div className="">
                    <p className="text-[16px] text-gray-400">complete task</p>
                    <span className="text-sm text-zinc-400">
                      Created on
                    </span>{" "}
                    <span className="text-sm font-bold text-blue-400">
                      Sunday
                    </span>{" "}
                    <span className="text-sm  text-blue-400">
                      December 22 2025 - 02:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-red-500 cursor-pointer text-[14px] ">
                      <FaTrash />
                    </button>
                    <button className="text-white cursor-pointer text-[14px] ">
                      {/* <FaCheckCircle /> */}
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#000] rounded-md py-2 px-3">
                <div className="border-l-5 border-green-400 rounded-md pl-3 flex justify-between items-center">
                  <div className="">
                    <p className="text-[16px] text-gray-400">complete task</p>
                    <span className="text-sm text-zinc-400">
                      Created on
                    </span>{" "}
                    <span className="text-sm font-bold text-green-400">
                      Sunday
                    </span>{" "}
                    <span className="text-sm  text-green-400">
                      December 22 2025 - 02:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-red-500 cursor-pointer text-[14px] ">
                      <FaTrash />
                    </button>
                    <button className="text-white cursor-pointer text-[14px] ">
                      {/* <FaCheckCircle /> */}
                      <FaCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
