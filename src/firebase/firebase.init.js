// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX5wdzeloYhNnUGPp_TR9_eUxd6qwCLLs",
  authDomain: "rent-wheels-2e985.firebaseapp.com",
  projectId: "rent-wheels-2e985",
  storageBucket: "rent-wheels-2e985.firebasestorage.app",
  messagingSenderId: "1027343101001",
  appId: "1:1027343101001:web:40a25cd2618877109e2398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);