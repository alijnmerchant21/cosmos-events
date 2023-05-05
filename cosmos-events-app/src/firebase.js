import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBpOp_wbhzoABUbQPZBF4rwF244l6oA3xw",
  authDomain: "cosmos-events-33c78.firebaseapp.com",
  projectId: "cosmos-events-33c78",
  storageBucket: "cosmos-events-33c78.appspot.com",
  messagingSenderId: "758933846252",
  appId: "1:758933846252:web:92e1101dcb919ae25b0dc9",
  measurementId: "G-R3TZ39L18J"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
