import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBmru_gk3DWYAiMPFwx1hSwjFdW_s3lK5Q",
  authDomain: "system-petshop.firebaseapp.com",
  projectId: "system-petshop",
  storageBucket: "system-petshop.appspot.com",
  messagingSenderId: "347105037189",
  appId: "1:347105037189:web:94bbab3a73487ba167d2ec"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);