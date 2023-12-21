// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBebziqs-mhToem9O3C21ASQBLHNvqou8U",
  authDomain: "task-management-812e6.firebaseapp.com",
  projectId: "task-management-812e6",
  storageBucket: "task-management-812e6.appspot.com",
  messagingSenderId: "93849554024",
  appId: "1:93849554024:web:844548bb701fc4f893ffdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;