import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDMD3tOlrvSA9yM4kzT5kQl-O3XWlJRyt8",
    authDomain: "jigarp4tel-photogram.firebaseapp.com",
    projectId: "jigarp4tel-photogram",
    storageBucket: "jigarp4tel-photogram.appspot.com",
    messagingSenderId: "592904815918",
    appId: "1:592904815918:web:738b8cd1dc2d3aca5566bf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };