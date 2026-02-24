import { initializeApp } from "https://www.gstatic.com";
import { getFirestore } from "https://www.gstatic.com";

const firebaseConfig = {
  apiKey: "AIzaSyBvPOFlJsnO5BNYLdRdA-Db4uvXT8QIwXQ",
  authDomain: "navigation-a08ba.firebaseapp.com",
  projectId: "navigation-a08ba",
  storageBucket: "navigation-a08ba.firebasestorage.app",
  messagingSenderId: "988049632333",
  appId: "1:988049632333:web:c1049f11704842a3d68004",
  measurementId: "G-TS21Y81VVF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
