import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useUser } from "../utils/AuthWrapper";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useUser();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword);
  };

  return (
    <>
      <div className="relative min-h-screen  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 dark:bg-gray-700">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcome! 🎬
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please sign in to your account
            </p>
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
            method="POST"
            onSubmit={() => handleLoginSubmit}
          >
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <div className="absolute right-0 mt-4"></div>
              <label
                className="text-sm font-bold text-gray-700 tracking-wide"
                onChange={(e) => setLoginEmail(e.target.value)}
              >
                Email
              </label>
              <input
                className=" w-full text-gray-800 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="email"
                placeholder="mail@gmail.com"
              />
            </div>
            <div className="mt-8 content-center">
              <label className="text-sm font-bold text-gray-700">
                Password
              </label>
              <input
                className="w-full content-center text-gray-800 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setLoginPassword(e.target.vaklue)}
              />
            </div>
            <div className="text-center">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-500 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn-full-indigo
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Sign in
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don't have an account?</span>
              <Link
                to="/signup"
                className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
