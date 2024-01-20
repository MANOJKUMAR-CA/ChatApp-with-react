import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9Pbmu-RP1IJ29YojdDt1c1eqTHmMaKsU",
  authDomain: "chat-react-scss.firebaseapp.com",
  projectId: "chat-react-scss",
  storageBucket: "chat-react-scss.appspot.com",
  messagingSenderId: "664202064550",
  appId: "1:664202064550:web:4baca78d107d360417fa67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()