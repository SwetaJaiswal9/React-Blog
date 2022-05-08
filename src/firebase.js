import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-hooks-blog-73415.firebaseapp.com",
  projectId: "react-hooks-blog-73415",
  storageBucket: "react-hooks-blog-73415.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();