import { createContext, useContext, useEffect, useState } from "react";
import AppRouter from "../router/AppRouter";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";

const AuthContext = createContext();
export const useUser = () => {
  return useContext(AuthContext);
};

const AuthWrapper = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    accessToken: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser({
          email: currentUser.email,
          username: currentUser.displayName,
          accessToken: currentUser.accessToken,
        });
      } else {
        setUser({
          email: "",
          username: "",
          accessToken: "",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const register = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
      });
      // setUser({
      //   email: auth.currentUser.email,
      //   username: auth.currentUser.displayName,
      //   accessToken: auth.currentUser.accessToken,
      // });
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {}
  };

  const logout = async () => {
    await signOut(auth);
  };

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
