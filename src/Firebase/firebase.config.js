// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU6Pbg1r6mNymu78iu8KvS54Nv_1_C_Mw",
  authDomain: "brand-shop-auth-d6238.firebaseapp.com",
  projectId: "brand-shop-auth-d6238",
  storageBucket: "brand-shop-auth-d6238.appspot.com",
  messagingSenderId: "680931344216",
  appId: "1:680931344216:web:40c40f84e5dff5acb2ef2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
