// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe7P_LVLQ2BHp0wzFsTL090NPSZ0rsTlU",
  authDomain: "mija-d1769.firebaseapp.com",
  projectId: "mija-d1769",
  storageBucket: "mija-d1769.appspot.com",
  messagingSenderId: "1060340285212",
  appId: "1:1060340285212:web:8d61ffadcf69c007eec4d9",
  measurementId: "G-S58JH0K4PC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
