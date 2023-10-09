// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIsEG7htqDKCWDAjyPmmB-wYzLEt8cXzQ",
    authDomain: "presentup-a6d27.firebaseapp.com",
    projectId: "presentup-a6d27",
    storageBucket: "presentup-a6d27.appspot.com",
    messagingSenderId: "856008969691",
    appId: "1:856008969691:web:0108e5d791f546ff1d6bfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

