// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgwEq9-2HvfDu8lcMriC-_2YlaHeY4ang",
  authDomain: "notinsta-ab1f1.firebaseapp.com",
  projectId: "notinsta-ab1f1",
  storageBucket: "notinsta-ab1f1.appspot.com",
  messagingSenderId: "167216536189",
  appId: "1:167216536189:web:7b0a1d60ee03294b68ef14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// this is our project storage - when we want to interact with storage we use the var below
const projectStorage = getStorage();

// this is firestore database - use var below to interact with it 
const projectFireStore = getFirestore();

export { projectFireStore, projectStorage};


// rules i deleted 
//if request.time < timestamp.date(2022, 12, 30);