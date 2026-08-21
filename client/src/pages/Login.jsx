import React, { useState } from "react";
import { useContextData } from "../context/AppContext";

const Login = () => {
  const { login } = useContextData();
  const [state, setState] = useState("Login");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formSubmit = async (e) => {
    e.preventDefault();

    login(state == "Register" ? "register" : "login", {
      fullname,
      email,
      password,
    });
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-[#222] ">
        <img
          src="task-64.png"
          alt=""
          className="w-15 place-self-center animate-bounce duration-300 "
        />
        <div className="bg-[#111] py-2 px-4 m-4 rounded-md max-w-[350px]">
          <form onSubmit={formSubmit} className="w-full ">
            <h2 className="text-2xl text-white font-medium text-center py-2 pb-4">
              {state}
            </h2>
            {state == "Register" && (
              <input
                type="text"
                placeholder="Enter fullname"
                className="w-full rounded-md bg-[#222] text-white text-sm outline-none border-0 px-2 py-2 mb-3"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            )}

            <input
              type="email"
              placeholder="Enter email"
              className="w-full rounded-md bg-[#222] text-white text-sm outline-none border-0 px-2 py-2 mb-3"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              className="w-full rounded-md bg-[#222] text-white text-sm outline-none border-0 px-2 py-2 mb-3"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 outline-none border-0 rounded-md py-2 cursor-pointer text-white font-medium hover:bg-blue-700 duration-300 mb-2"
            >
              {state}
            </button>

            {state === "Login" ? (
              <p className="text-sm text-white py-2 font-normal">
                Don't have an account ?{" "}
                <span
                  className="underline text-blue-600 cursor-pointer"
                  onClick={() => setState("Register")}
                >
                  Register
                </span>
              </p>
            ) : (
              <p className="text-sm text-white py-2 font-normal">
                Already have an account ?{" "}
                <span
                  className="underline text-blue-600 cursor-pointer"
                  onClick={() => setState("Login")}
                >
                  Login
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
