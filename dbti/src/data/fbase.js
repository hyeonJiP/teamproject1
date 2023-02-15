// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpaUTui3s56Rq6PINJpOdS7bWZK0eiRac",
  authDomain: "dbti-71c5d.firebaseapp.com",
  projectId: "dbti-71c5d",
  storageBucket: "dbti-71c5d.appspot.com",
  messagingSenderId: "740815783670",
  appId: "1:740815783670:web:c506cd11e0e2c4587fced7",
  measurementId: "G-1YW9PPN21G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
