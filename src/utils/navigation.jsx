import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/NotFound";

export const routes = [
  { path: "/", name: "Home", element: <Home />, isPrivate: false },
  {
    path: "/movie-detail",
    name: "MovieDetail",
    element: <MovieDetail />,
    isPrivate: true,
  },
  { path: "/login", name: "Login", element: <Login />, isPrivate: false },
  { path: "/signup", name: "Signup", element: <SignUp />, isPrivate: false },

  {
    path: "/not-found",
    name: "NotFound",
    element: <NotFound />,
    isPrivate: false,
  },
];
