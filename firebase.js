// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXPTnCXo7xoHkXZfS39vE0TVxM_PJM6Nc",
  authDomain: "smart-booking-system-4b02a.firebaseapp.com",
  projectId: "smart-booking-system-4b02a",
  storageBucket: "smart-booking-system-4b02a.firebasestorage.app",
  messagingSenderId: "636079825773",
  appId: "1:636079825773:web:c5de9e6150e5c89e987064",
  measurementId: "G-9Z3D2Q3TFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);