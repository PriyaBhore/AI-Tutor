// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDAF_zoH5v0x84GLlhcHKhL8NmEXi5bu_0",
  authDomain: "ai-tutor-2025-fef3c.firebaseapp.com",
  projectId: "ai-tutor-2025-fef3c",
  storageBucket: "ai-tutor-2025-fef3c.firebasestorage.app",
  messagingSenderId: "840196899349",
  appId: "1:840196899349:web:08fcd289cd7fbedb03041c",
  measurementId: "G-YYK6VVFDWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
console.log(db); 
