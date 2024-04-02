import AppRouter from "./router/AppRouter";
import AuthWrapper from "./utils/AuthWrapper";

function App() {
  return (
    <div className=" bg-gray-500  dark:bg-gray-700">
      <AuthWrapper />
    </div>
  );
}

export default App;
