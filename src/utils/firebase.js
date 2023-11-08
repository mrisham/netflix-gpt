// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADaY9JrqI8a8WxKWJU2ZTtGDFOTZVYQpE",
  authDomain: "ai-netflixgpt.firebaseapp.com",
  projectId: "ai-netflixgpt",
  storageBucket: "ai-netflixgpt.appspot.com",
  messagingSenderId: "361754953998",
  appId: "1:361754953998:web:cd4fcd06d7051a0a83ef5f",
  measurementId: "G-S4MNHD46YY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
