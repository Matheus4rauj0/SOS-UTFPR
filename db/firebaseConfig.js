// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnG6eI-f1qb-4madFA_2K-BZVFgk6t3Fg",
  authDomain: "sos-utfpr.firebaseapp.com",
  databaseURL: "https://sos-utfpr-default-rtdb.firebaseio.com",
  projectId: "sos-utfpr",
  storageBucket: "sos-utfpr.appspot.com",
  messagingSenderId: "538657237755",
  appId: "1:538657237755:web:8555cff8667b013da89e5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getFirestore(app);
export const auth = getAuth(app);