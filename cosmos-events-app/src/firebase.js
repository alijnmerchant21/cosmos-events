import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from 'config.js';

firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
