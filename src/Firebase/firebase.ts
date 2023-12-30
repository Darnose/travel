import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCKymqBAbvfByR5Fh4vSR9Ey--6muJrTf8",
  authDomain: "travel-398907.firebaseapp.com",
  projectId: "travel-398907",
  storageBucket: "travel-398907.appspot.com",
  messagingSenderId: "195264862570",
  appId: "1:195264862570:web:6798ccc41e8e0e8f43ed13"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };