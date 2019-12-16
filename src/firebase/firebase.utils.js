import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_XE9GcEsNgK8zCGbQsuX-XqlvTm6f7zE",
    authDomain: "crnw-db.firebaseapp.com",
    databaseURL: "https://crnw-db.firebaseio.com",
    projectId: "crnw-db",
    storageBucket: "crnw-db.appspot.com",
    messagingSenderId: "813343823352",
    appId: "1:813343823352:web:cc631f477d291b8a39b20d",
    measurementId: "G-CK4V9TPRKQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;