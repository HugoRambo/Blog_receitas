// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//firebase/firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKxMIl_WOwoJISPuaNYFZEiRg4nPnZkp0",
  authDomain: "miniblog2022.firebaseapp.com",
  projectId: "miniblog2022",
  storageBucket: "miniblog2022.appspot.com",
  messagingSenderId: "550960458126",
  appId: "1:550960458126:web:04e871be63153637b11cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}













/*import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIpAhyRoAPRngLAGU-XivlYGoTTmpM5oE",
  authDomain: "miniblog-68537.firebaseapp.com",
  projectId: "miniblog-68537",
  storageBucket: "miniblog-68537.appspot.com",
  messagingSenderId: "118179272304",
  appId: "1:118179272304:web:2eb3ea6e8ac45a4fee46b5",

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };*/
