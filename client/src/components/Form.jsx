import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { useContextData } from "../context/AppContext";
const Form = () => {
  const [task, setTask] = useState("");
  const [color, setColor] = useState("gray");

  const {
    tasks,
    setTasks,
    pending,
    setPending,
    completed,
    setCompleted,
    total,
    setTotal,
    backend_url,
    fetchData,
    deleteAllTask,
  } = useContextData();
  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!task) {
        toast.error("Enter task title");
        return;
      }
      const { data } = await axios.post(backend_url + "/api/task/add", {
        text: task,
        colors: color,
        taskDone: false,
      });
      toast.success("Task added successfully");
      setTask("");
      setColor("gray");
      fetchData();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full md:h-[70px] grid md:grid-cols-12 gap-4 items-center justify-center py-2 bg-[#111]">
      <div className="w-full  md:col-span-7 bg-[#222] p-2 rounded-full">
        <form onSubmit={formSubmit} className="flex gap-4 items-center">
          <input
            type="text"
            className="w-full outline-none px-2 text-white text-sm "
            placeholder="Write title here..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
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
                  value="blue"
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
            <button
              type="submit"
              className="w-[35px] aspect-square rounded-full bg-white text-black flex justify-center items-center cursor-pointer"
            >
              <FaPlus />
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex justify-center md:justify-end md:col-span-5">
        <div className="flex flex-wrap gap-2 ">
          <button
            className=" bg-red-200 border border-red-400 text-red-600 flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer text-sm"
            onClick={() => deleteAllTask()}
          >
            <h4>Delete All </h4>
          </button>
          <button className="bg-green-200 border border-green-400 text-green-600 flex items-center gap-2 px-3 py-1.5 rounded-full  text-sm">
            <h4>Completed : </h4>
            <span>{completed}</span>
          </button>
          <button className="bg-orange-200 border border-orange-400 text-orange-600 flex items-center gap-2 px-3 py-1.5 rounded-full  text-sm">
            <h4>Incompleted : </h4>
            <span>{pending}</span>
          </button>
          <button className="bg-blue-200 border border-blue-400 text-blue-600 flex items-center gap-2 px-3 py-1.5 rounded-full  text-sm">
            <h4>Total : </h4>
            <span>{total}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
