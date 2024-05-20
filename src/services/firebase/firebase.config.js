// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI3SPbixdncrfQLYnmr9iva5mOHuXRraY",
  authDomain: "students-7be35.firebaseapp.com",
  databaseURL: "https://students-7be35-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "students-7be35",
  storageBucket: "students-7be35.appspot.com",
  messagingSenderId: "450488251551",
  appId: "1:450488251551:web:1b9a41e6dfb96ede4b9eaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;