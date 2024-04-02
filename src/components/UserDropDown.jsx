import { Link } from "react-router-dom";
import { useUser } from "../utils/AuthWrapper";

const UserDropDown = () => {
  const { user, logout } = useUser();

  return (
    <div className="absolute right-0 top-10 w-40  z-20  overflow-hidden rounded-md shadow-xl bg-gray-400  dark:bg-gray-600">
      {!user && (
        <>
          <Link
            to="/signup"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Login
          </Link>{" "}
        </>
      )}
      {user && (
        <>
          <Link
            to="/"
            onClick={logout}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Log Out
          </Link>
        </>
      )}
    </div>
  );
};

export default UserDropDown;
