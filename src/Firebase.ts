import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA4uJfwJNLDT2MLYMOe95ZV8ElM-qrptqQ',
  authDomain: 'bookshelf-96f4b.firebaseapp.com',
  databaseURL: 'https://bookshelf-96f4b.firebaseio.com',
  projectId: 'bookshelf-96f4b',
  storageBucket: 'bookshelf-96f4b.appspot.com',
  messagingSenderId: '997957418696',
  appId: '1:997957418696:web:9d28340f14b87eb7b2effd',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };