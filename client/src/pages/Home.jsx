import { useEffect, useState } from "react";
import {
  FaBook,
  FaBookOpen,
  FaCheckCircle,
  FaPlus,
  FaRegCircle,
  FaTrash,
  FaUser,
} from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import Header from "../components/Header";
import Form from "../components/Form";
import { useContextData } from "../context/AppContext";
import Task from "../components/Task";
const Home = () => {
  const {
    tasks,
    setTask,
    pending,
    setPending,
    completed,
    setCompleted,
    total,
    setTotal,
    backend_url,
    fetchData,
  } = useContextData();

  return (
    <>
      <div className=" w-full h-[100vh] overflow-y-hidden bg-[#111]">
        <Header />
        <main className="px-4 md:px-12 ">
          {/* insert form  */}
          <Form />
          {/* task display  */}

          <div className="overflow-y-scroll h-[calc(100vh-130px)] py-2">
            {tasks?.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4 ">
                {tasks.map((data, index) => (
                  <Task data={data} key={index} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center h-[calc(100vh-150px)]">
                <img src="task-64.png" alt="" className="w-20 animate-bounce" />
                <p className="text-zinc-400 text-2xl"> Empty List</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
