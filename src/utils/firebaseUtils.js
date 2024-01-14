// Import the functions you need from the SDKs you need
import * as database from "firebase/database";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const devFirebaseConfig = {
  apiKey: "AIzaSyDdl4pju1n5R-AHk0ycTGwoFuk2cHy989g",
  authDomain: "jean-treinador.firebaseapp.com",
  projectId: "jean-treinador",
  storageBucket: "jean-treinador.appspot.com",
  messagingSenderId: "867062434961",
  appId: "1:867062434961:web:3887b1f6f9e9499d4d8330",
  measurementId: "G-FRMKEMJ1L6"
};

const prodFirebaseConfig = {
    apiKey: "AIzaSyDdl4pju1n5R-AHk0ycTGwoFuk2cHy989g",
    authDomain: "jean-treinador.firebaseapp.com",
    projectId: "jean-treinador",
    storageBucket: "jean-treinador.appspot.com",
    messagingSenderId: "867062434961",
    appId: "1:867062434961:web:3887b1f6f9e9499d4d8330",
    measurementId: "G-FRMKEMJ1L6"
};

const firebaseConfig = process.env.NODE_ENV === 'production'
    ? prodFirebaseConfig
    : devFirebaseConfig;

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
initializeApp(firebaseConfig);
export const firebaseDatabase = database;
export const db = firebaseDatabase.getDatabase();
