// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4FdMgl2MaiD3JSFM0qjbLwa1GyQ3W7is",
  authDomain: "khayim23-f095b.firebaseapp.com",
  projectId: "khayim23-f095b",
  storageBucket: "khayim23-f095b.appspot.com",
  messagingSenderId: "1003864951917",
  appId: "1:1003864951917:web:dd1ff950f4b38f51ca4364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const iniciarFirestore = ()=> app