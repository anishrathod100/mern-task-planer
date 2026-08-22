import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  Navigate,
} from "react";
import toast from "react-hot-toast";

export const TaskContext = createContext();

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

export const AppContext = ({ children }) => {
  const backend_url = "https://backend-164e.onrender.com";
  const [tasks, setTasks] = useState([]);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [authUser, setAuthUser] = useState(null);
  // login & register
  const login = async (state, details) => {
    try {
      const { data } = await axios.post(
        backend_url + `/api/user/${state}`,
        details,
      );
      if (data.success) {
        toast.success(data.message);
        setToken(data.token);
        setAuthUser(data.userExist);
        localStorage.setItem("token", data.token);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //  add task
  const fetchData = async () => {
    try {
      const { data } = await axios.get(backend_url + "/api/task", {
        headers: { token },
      });
      setTasks(data);
      setTotal(data?.length);
      setPending(data?.filter((item) => item.taskDone == false)?.length);
      setCompleted(data?.filter((item) => item.taskDone == true)?.length);
    } catch (error) {}
  };

  // delete task
  const deleteTask = async (id) => {
    try {
      if (confirm("Are you sure ? delete this record")) {
        const { data } = await axios.delete(backend_url + `/api/task/${id}`, {
          headers: { token },
        });
        toast.success("Task deleted successfully");
        fetchData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //   // update task
  const updateTask = async (task) => {
    try {
      const { data } = await axios.put(
        backend_url + `/api/task/${task._id}`,
        {
          taskDone: !task.taskDone,
        },
        { headers: { token } },
      );
      toast.success("Task updated successfully");
      fetchData();
    } catch (error) {
      toast.error(error.message);
    }
  };

  //   // delete all task
  const deleteAllTask = async () => {
    try {
      if (confirm("Are you sure ? delete all records")) {
        const { data } = await axios.delete(backend_url + `/api/task`, {
          headers: { token },
        });
        toast.success("All task deleted successfully");
        fetchData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // check user is authenticate or not
  const checkAuthUser = async () => {
    try {
      const { data } = await axios.get(backend_url + "/api/user/check", {
        headers: { token },
      });
      if (data.success) {
        setAuthUser(data.user);
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // logout
  const logout = () => {
    setAuthUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    checkAuthUser();
  }, [tasks]);

  const values = {
    tasks,
    setTasks,
    pending,
    setPending,
    completed,
    setCompleted,
    total,
    setTotal,
    backend_url,
    colorStyle,
    fetchData,
    deleteTask,
    updateTask,
    deleteAllTask,
    token,
    setToken,
    authUser,
    setAuthUser,
    login,
    logout,
  };
  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};
export const useContextData = () => useContext(TaskContext);
