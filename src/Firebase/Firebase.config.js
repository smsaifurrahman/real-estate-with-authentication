// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6b1c8vMQ0iyeRWgxqne_myrjSZa_oGsA",
  authDomain: "realstate-with-authentication.firebaseapp.com",
  projectId: "realstate-with-authentication",
  storageBucket: "realstate-with-authentication.appspot.com",
  messagingSenderId: "377694956471",
  appId: "1:377694956471:web:278a36f154c6a96b82d632"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app