import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLIZb6Yl_yZd8NZ9d0LORFc5_bXE6HZJg",
  authDomain: "task-manager-effb0.firebaseapp.com",
  projectId: "task-manager-effb0",
  storageBucket: "task-manager-effb0.appspot.com",
  messagingSenderId: "714925413499",
  appId: "1:714925413499:web:ae21a1c02bbdb9a855bede",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
