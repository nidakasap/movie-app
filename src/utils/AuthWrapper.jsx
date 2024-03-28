import { createContext, useContext, useState } from "react";
import AppRouter from "../router/AppRouter";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const AuthContext = createContext();
export const useUser = () => {
  return useContext(AuthContext);
};

const AuthWrapper = () => {
  const [user, setUser] = useState();

  const register = async (email, password) => {
    try {
      const currentUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(currentUser);
      setUser(currentUser.user.email);
    } catch (error) {
      console.log("=>>>>>>", error.message);
    }
  };

  const login = async (email, password) => {};

  const logout = async () => {};

  return (
    <>
      <AuthContext.Provider
        value={{
          login,
          logout,
          register,
          user,
        }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
};

export default AuthWrapper;
