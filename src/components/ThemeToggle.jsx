import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("themes");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("themes", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("themes", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-14 h-8 flex items-center dark:bg-indigo-800 bg-indigo-100 cursor-poiter rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={20} />
      {/* ball */}
      <div
        className="absolute bg-white dark:bg-white w-6 h-6 rounded-full shadow-medium transform transition-transform  duration-300"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      {/* ball */}
      <BsSunFill className="ml-auto text-yellow-400" size={20} />
    </div>
  );
};

export default ThemeToggle;
