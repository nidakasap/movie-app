import { FaGoogle } from "react-icons/fa";
import { useUser } from "../utils/AuthWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const { register } = useUser();
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    register(registerEmail, registerPassword, registerName);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-500  dark:bg-gray-700 ">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome! 🎬</h2>
          <p className="mt-2 text-sm text-gray-600">Create a new account</p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3">
          <span className="w-11 h-11 items-center justify-center inline-flex bg-black rounded-full bg-i-900 hover:shadow-lg cursor-pointer transition ease-in duration-300">
            <FaGoogle className="text-white" size={22} />
          </span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-16 bg-gray-300"></span>
          <span className="text-gray-500 ">OR</span>
          <span className="h-px w-16 bg-gray-300"></span>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          onSubmit={handleRegisterSubmit}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="relative">
            <div className="absolute right-0 mt-4"></div>
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Name
            </label>
            <input
              className=" w-full text-gray-800 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setRegisterName(e.target.value)}
            />
          </div>

          <div className="relative">
            <div className="absolute right-0 mt-4"></div>
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className=" w-full text-gray-800 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
              placeholder="mail@gmail.com"
              onChange={(e) =>
                setRegisterEmail(e.target.value.toLowerCase().trim())
              }
            />
          </div>
          <div className="mt-8 content-center">
            <label className="text-sm font-bold text-gray-700">Password</label>
            <input
              className="w-full content-center text-gray-800 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Sign Up
            </button>
          </div>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>Already have an account?</span>
            <Link
              to="/login"
              className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
