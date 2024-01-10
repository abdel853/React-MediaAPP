// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI-CR0m2BntiUDSipZegikigSaQpQHcnk",
  authDomain: "social-media-d3984.firebaseapp.com",
  projectId: "social-media-d3984",
  storageBucket: "social-media-d3984.appspot.com",
  messagingSenderId: "208955340493",
  appId: "1:208955340493:web:d01ce7abf3c51903729b84",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
