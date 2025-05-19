// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRx31rqkWoYn3ikHs0I-3-IcOfpAWX_JM",
  authDomain: "futuredge-784af.firebaseapp.com",
  projectId: "futuredge-784af",
  storageBucket: "futuredge-784af.firebasestorage.app",
  messagingSenderId: "247840550563",
  appId: "1:247840550563:web:1ca3cafdae19b0533c1916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
