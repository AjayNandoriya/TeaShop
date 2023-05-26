// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHwNgej6KYqtuUwl5MUQlElTob7zfo1lg",
  authDomain: "teashop-bc585.firebaseapp.com",
  projectId: "teashop-bc585",
  storageBucket: "teashop-bc585.appspot.com",
  messagingSenderId: "211123009892",
  appId: "1:211123009892:web:8458ece8ce413062e36271",
  measurementId: "G-7B2PYP45N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);