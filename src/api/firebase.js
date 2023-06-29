import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrSPL_9OMsI4o27TWq_uKmrB5YSPQIAX8",
  authDomain: "wedding-a1899.firebaseapp.com",
  projectId: "wedding-a1899",
  storageBucket: "wedding-a1899.appspot.com",
  messagingSenderId: "815560480015",
  appId: "1:815560480015:web:37d972beb2e385b9b81a7a",
  measurementId: "G-CT13TZJWEB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
