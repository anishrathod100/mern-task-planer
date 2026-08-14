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
const App = () => {
  const [color, setColor] = useState("gray");
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);

  const backend_url = "https://backend-54y9.onrender.com";
  // get data
  const fetchData = async () => {
    try {
      const { data } = await axios.get(backend_url + "/api/task");
      setTasks(data);
      setTotal(data.length);
      setPending(data.filter((item) => item.taskDone == false).length);
      setComplate(data.filter((item) => item.taskDone == true).length);
    } catch (error) {
      console.log(error);
    }
  };
  //  add task
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

  // delete task
  const deleteTask = async (id) => {
    try {
      if (confirm("Are you sure ? delete this record")) {
        const { data } = await axios.delete(backend_url + `/api/task/${id}`);
        toast.success("Task deleted successfully");
        fetchData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // delete task
  const updateTask = async (task) => {
    console.log(task);
    try {
      const { data } = await axios.put(backend_url + `/api/task/${task._id}`, {
        taskDone: !task.taskDone,
      });
      toast.success("Task updated successfully");
      fetchData();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // delete task
  const deleteAllTask = async () => {
    try {
      const { data } = await axios.delete(backend_url + `/api/task`);
      toast.success("All task deleted successfully");
      fetchData();
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const colorStyle = {
    red: {
      text: "text-red-400",
      border: "border-red-400",
    },
    green: {
      text: "text-green-400",
      border: "border-green-400",
    },
    yellow: {
      text: "text-yellow-400",
      border: "border-yellow-400",
    },
    pink: {
      text: "text-pink-400",
      border: "border-pink-400",
    },
    blue: {
      text: "text-blue-400",
      border: "border-blue-400",
    },
    gray: {
      text: "text-gray-400",
      border: "border-gray-400",
    },
  };

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
          {/* insert form  */}
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
                  <h4>completed : </h4>
                  <span>{completed}</span>
                </button>
                <button className="bg-orange-200 border border-orange-400 text-orange-600 flex items-center gap-2 px-3 py-1.5 rounded-full  text-sm">
                  <h4>Pending : </h4>
                  <span>{pending}</span>
                </button>
                <button className="bg-blue-200 border border-blue-400 text-blue-600 flex items-center gap-2 px-3 py-1.5 rounded-full  text-sm">
                  <h4>Total : </h4>
                  <span>{total}</span>
                </button>
              </div>
            </div>
          </div>

          {/* task display  */}

          <div className="overflow-y-scroll h-[calc(100vh-130px)] py-2">
            {tasks.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4 ">
                {tasks.map((data) => (
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
                        <span className="text-sm text-zinc-500">
                          Created on
                        </span>{" "}
                        <span
                          className={`text-sm font-bold ${colorStyle[data.colors].text}`}
                        >
                          {new Date(data.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "long",
                            },
                          )}
                        </span>{" "}
                        <span
                          className={`text-sm ${colorStyle[data.colors].text} `}
                        >
                          {new Date(data.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            },
                          )}{" "}
                          -{" "}
                          {new Date(data.createdAt).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}
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

export default App;
