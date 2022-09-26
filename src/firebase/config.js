// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIpAhyRoAPRngLAGU-XivlYGoTTmpM5oE",
  authDomain: "miniblog-68537.firebaseapp.com",
  projectId: "miniblog-68537",
  storageBucket: "miniblog-68537.appspot.com",
  messagingSenderId: "118179272304",
  appId: "1:118179272304:web:2eb3ea6e8ac45a4fee46b5",
  measurementId: "G-0N4MXVD4LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export {    db  }