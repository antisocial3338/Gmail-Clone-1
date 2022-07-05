import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATTcoDaK9Zgb0UlacaxhitGtihBMzQCI0",
  authDomain: "signal-social.firebaseapp.com",
  projectId: "signal-social",
  storageBucket: "signal-social.appspot.com",
  messagingSenderId: "407940045832",
  appId: "1:407940045832:web:60a3e65bbcc45a031485bd",
  measurementId: "G-SB24KMVB5J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
