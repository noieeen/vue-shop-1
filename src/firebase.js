import firebase from "firebase";
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
import 'firebase/firebase-storage'


//require("firebase/firestore");

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAbv8DNYbMyPXXKXo2LTwdJAp6h7wFnPQk",
  authDomain: "e-com-5ee46.firebaseapp.com",
  databaseURL: "https://e-com-5ee46.firebaseio.com",
  projectId: "e-com-5ee46",
  storageBucket: "e-com-5ee46.appspot.com",
  messagingSenderId: "683984825321",
  appId: "1:683984825321:web:13b2d8b275e454d3acf978",
  measurementId: "G-V7E8V4Y9MY"
};
// Initialize Firebase

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.analytics();
export { fb, db };
