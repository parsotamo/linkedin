import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwf5Xn0k1OXzJpJGW4YMnUh-xExFZxHwQ",
    authDomain: "linkedin-clone-6f287.firebaseapp.com",
    projectId: "linkedin-clone-6f287",
    storageBucket: "linkedin-clone-6f287.appspot.com",
    messagingSenderId: "367650115468",
    appId: "1:367650115468:web:6e2e0be61e265735c3d0a9",
    measurementId: "G-PNNVVQ4KRK"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
// export const storage =  firebase.storage();