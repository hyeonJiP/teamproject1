// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5nT2dwGW_wn7F16KnFEmi2A3pqtvtKwc",
  authDomain: "developer-7.firebaseapp.com",
  databaseURL: "https://developer-7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "developer-7",
  storageBucket: "developer-7.appspot.com",
  messagingSenderId: "811860539228",
  appId: "1:811860539228:web:61d3059ca8b3afb89bb399",
  measurementId: "G-4F3YZEHLNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);