// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsZq2AmnHuNSc5z1W1OKusfqTIf8xPzxk",
  authDomain: "authentication-movie-app-a4583.firebaseapp.com",
  projectId: "authentication-movie-app-a4583",
  storageBucket: "authentication-movie-app-a4583.appspot.com",
  messagingSenderId: "769546340386",
  appId: "1:769546340386:web:666712675a87d444e4227b",
  measurementId: "G-L545VDHLRC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
