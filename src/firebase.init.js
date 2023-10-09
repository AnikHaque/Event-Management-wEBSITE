// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv3X5VNHzBukXCUNVBjZmIFT_wAj5Et88",
    authDomain: "dentistry-c19be.firebaseapp.com",
    projectId: "dentistry-c19be",
    storageBucket: "dentistry-c19be.appspot.com",
    messagingSenderId: "196837344411",
    appId: "1:196837344411:web:9034704879da2c102f723e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

