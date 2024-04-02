import ThemeToggle from "./ThemeToggle";
import { CiUser } from "react-icons/ci";
import { useUser } from "../utils/AuthWrapper";
import UserDropDown from "./UserDropDown";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useUser();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toogleMenu = (e) => {
    e.preventDefault();
    setIsUserMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="  fixed top-0 z-20 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
        <div className="flex justify-between p-4">
          <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white">
            Movies
          </div>
          <div className=" flex items-center space-x-6 text-lg font-semibold tracking-tight">
            <ThemeToggle />
            <button
              onClick={toogleMenu}
              className="relative px-2 py-2 flex items-center  text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              {user.username && <span>Hi, {user.username.toUpperCase()}!</span>}

              <CiUser />

              {isUserMenuOpen && <UserDropDown />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
