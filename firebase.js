// import firebase from 'firebase/app';
// import 'firebase/firestore';
import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAO8zBdza4qFp2tQ76aj8KzzUI66nNRdM0",
    authDomain: "personal-website-vuejs.firebaseapp.com",
    databaseURL: "https://personal-website-vuejs.firebaseio.com",
    projectId: "personal-website-vuejs",
    storageBucket: "personal-website-vuejs.appspot.com",
    messagingSenderId: "823513043235",
    appId: "1:823513043235:web:b2b82377b0d1eb6f1c3c96",
    measurementId: "G-J9H8EF5WKY"
});
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const notesRef = db.ref('notes')
// const notesCollection = db.collection('notes');

// export {
//     notesCollection
// };