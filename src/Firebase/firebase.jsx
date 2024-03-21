// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGjuKQk7UBWwnBZiKe9h6TzCsipwgonf4",
  authDomain: "milind-2ff20.firebaseapp.com",
  projectId: "milind-2ff20",
  storageBucket: "milind-2ff20.appspot.com",
  messagingSenderId: "744946200910",
  appId: "1:744946200910:web:ab9658951ed56976eeae1f",
  measurementId: "G-1QNE4B2J1H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
