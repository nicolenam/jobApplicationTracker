// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwAVjYDGuJDgHMegS8wtUs6vhKUbi_A2c",
  authDomain: "job-app-tracker-447d8.firebaseapp.com",
  databaseURL: "https://job-app-tracker-447d8-default-rtdb.firebaseio.com",
  projectId: "job-app-tracker-447d8",
  storageBucket: "job-app-tracker-447d8.appspot.com",
  messagingSenderId: "255718526701",
  appId: "1:255718526701:web:f9f081d29541a502de86e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;