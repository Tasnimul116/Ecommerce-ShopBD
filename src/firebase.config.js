
import { initializeApp } from "firebase/app";
import {getAuth,  } from "firebase/auth"
import{getFirestore} from "firebase/firestore"
import{getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA4cD9xx_0mjf_OmmHb6naiGtgulrRmYuA",
  authDomain: "shopbd-74fc0.firebaseapp.com",
  projectId: "shopbd-74fc0",
  storageBucket: "shopbd-74fc0.appspot.com",
  messagingSenderId: "53676291915",
  appId: "1:53676291915:web:3efd011d63cc0894481ace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage= getStorage(app)
export default app;