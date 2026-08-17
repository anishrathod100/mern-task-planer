import React from "react";
import { useContextData } from "../context/AppContext";
import { FaCheckCircle, FaRegCircle, FaTrash } from "react-icons/fa";
const Task = ({ data }) => {
  const { colorStyle, deleteTask, updateTask } = useContextData();

  return (
    <div
      key={data._id}
      className="
                bg-[#000] rounded-md py-2 px-3"
    >
      <div
        className={`border-l-5  ${colorStyle[data.colors].border} rounded-md pl-3 flex gap-4 justify-between items-center`}
      >
        <div className="">
          <p
            className={`text-[16px] text-white/70  ${data.taskDone ? "line-through" : ""}`}
          >
            {data.text}
          </p>
          <span className="text-sm text-zinc-500">Created on</span>{" "}
          <span className={`text-sm font-bold ${colorStyle[data.colors].text}`}>
            {new Date(data.createdAt).toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </span>{" "}
          <span className={`text-sm ${colorStyle[data.colors].text} `}>
            {new Date(data.createdAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}{" "}
            -{" "}
            {new Date(data.createdAt).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="text-red-500 cursor-pointer text-[14px] "
            onClick={() => deleteTask(data._id)}
          >
            <FaTrash />
          </button>
          <button
            className="text-white cursor-pointer text-[14px] "
            onClick={() => updateTask(data)}
          >
            {data.taskDone ? <FaCheckCircle /> : <FaRegCircle />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
