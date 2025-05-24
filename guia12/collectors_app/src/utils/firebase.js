// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPGG6iM273eB7wUxrhQREx2ootDc38NBs",
  authDomain: "collectorsapp-9607e.firebaseapp.com",
  projectId: "collectorsapp-9607e",
  storageBucket: "collectorsapp-9607e.firebasestorage.app",
  messagingSenderId: "307855230686",
  appId: "1:307855230686:web:b6a8703e2f5faf18a4e44f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
