import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useUser } from "../utils/AuthWrapper";
import { routes } from "../utils/navigation";

const AppRouter = () => {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route, index) => {
          if (!route.isPrivate || (route.isPrivate && user)) {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          }
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
