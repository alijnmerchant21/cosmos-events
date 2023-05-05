import firebase from 'firebase/app';
import { auth } from 'firebase/compat/auth';
import 'firebase/firestore';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);