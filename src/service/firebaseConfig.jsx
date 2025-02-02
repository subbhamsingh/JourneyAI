// Import the necessary functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ZbNIOiJ5rNM0itDOrTh462sMQsF4u6E",
  authDomain: "ai-travel-planner-f6edd.firebaseapp.com",
  projectId: "ai-travel-planner-f6edd",
  storageBucket: "ai-travel-planner-f6edd.appspot.com",
  messagingSenderId: "442030231059",
  appId: "1:442030231059:web:0b5ff0623391053d2139e6",
  measurementId: "G-JG3EHER8ZY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
