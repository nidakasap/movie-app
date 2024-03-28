import cx from "classnames";
import ThemeToggle from "./ThemeToggle";
import { CiUser } from "react-icons/ci";
import { BiSolidUserDetail } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-20 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
        <div className="flex justify-between p-4">
          <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white">
            Movies
          </div>
          <div className="flex items-center space-x-6 text-lg font-semibold tracking-tight">
            <ThemeToggle />
            <p className="px-6 py-2 flex items-center  space-x-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black">
              <span>Hi, Nida!</span> <CiUser />
            </p>
          </div>
        </div>
        <div></div>
      </nav>
    </>
  );
};

export default Navbar;
