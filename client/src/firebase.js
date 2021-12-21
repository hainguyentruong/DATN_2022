import * as firebase from 'firebase';
// import { initializeApp } from "./firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBscwr-VS3Nl6FixP3b8iOer6hvYeAf7_g",
    authDomain: "ecommerce-f922f.firebaseapp.com",
    projectId: "ecommerce-f922f",
    storageBucket: "ecommerce-f922f.appspot.com",
    messagingSenderId: "694458466498",
    appId: "1:694458466498:web:b15ec58e5ed54a39c1bb5b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();