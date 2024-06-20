// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauthenticate-8a6e2.firebaseapp.com",
  projectId: "mernauthenticate-8a6e2",
  storageBucket: "mernauthenticate-8a6e2.appspot.com",
  messagingSenderId: "46255644520",
  appId: "1:46255644520:web:87f96d98fc0135bfe280dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);